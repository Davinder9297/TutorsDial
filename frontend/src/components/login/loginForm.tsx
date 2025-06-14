"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import InputField from "../common/input";
import CustomButton from "../common/button";
import Image from "next/image";
import toast from "react-hot-toast";
import { AuthData, AuthRoles } from "@/types/auth";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const validatePassword = (password: string) => {
    const lengthCheck = password.length >= 8;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const specialChar = /[^A-Za-z0-9]/.test(password);

    if (!lengthCheck) return "Password must be at least 8 characters long.";
    if (!upperCase) return "Password must include an uppercase letter.";
    if (!lowerCase) return "Password must include a lowercase letter.";
    if (!specialChar) return "Password must include a special character.";
    return "";
  };

const GoogleIcon = () => (
  <Image src="/images/auth/google-logo.png" alt="logo" width={20} height={20} />
);

const AppleIcon = () => (
  <Image src="/images/auth/apple-logo.png" alt="logo" width={20} height={20} />
);

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [roles, setRoles] = useState<AuthRoles>({ tutor: true, student: false });
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
  if (pathname.includes("/signup")) {
    setIsSignUp(true);
  } else {
    setIsSignUp(false); // default to Sign In for /login or others
  }
}, [pathname]);

  const [formData, setFormData] = useState<AuthData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
  if (isSignUp) {
    if (formData.password.trim() === "") {
      setPasswordError(""); // don't show error on empty input
      setIsSubmitDisabled(true);
    } else {
      const error = validatePassword(formData.password);
      setPasswordError(error);
      setIsSubmitDisabled(
        !!error || formData.password !== formData.confirmPassword
      );
    }
  }
  else{
    const emailFilled = formData.email.trim() !== "";
    const passwordFilled = formData.password.trim() !== "";
    setIsSubmitDisabled(!(emailFilled && passwordFilled));
  }
}, [formData.password, formData.confirmPassword, isSignUp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const error = validatePassword(formData.password);
    if (isSignUp && error) {
      toast.error(error);
      return;
    }

    if (isSignUp && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log("Submitted Info:", {
      ...formData,
      roles,
      type: isSignUp ? "Sign Up" : "Sign In",
    });

    toast.success("Form submitted successfully");
  };

  return (
    <div className="relative">
      <div className="flex border-b mb-6">
        <button
          onClick={() => setIsSignUp(false)}
          className={clsx(
            "w-1/2 py-2 font-semibold text-center text-xl cursor-pointer",
            !isSignUp
              ? "text-[var(--primary-text)] border-b-[3.5px] border-[var(--primary-button)]"
              : "text-gray-400"
          )}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignUp(true)}
          className={clsx(
            "w-1/2 py-2 font-semibold text-center text-xl cursor-pointer",
            isSignUp
              ? "text-[var(--primary-text)] border-b-[3.5px] border-[var(--primary-button)]"
              : "text-gray-400"
          )}
        >
          Sign Up
        </button>
      </div>

      <form className="space-y-4 md:px-8 px-4" onSubmit={handleSubmit}>
        {isSignUp && (
          <InputField
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            label="Name"
            labelStyle="text-xs !mb-0.5"
            inputStyle="text-sm py-2.5 px-2 placeholder-[#A0A5B1] placeholder:font-normal"
          />
        )}

        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          labelStyle="text-xs !mb-0.5 mt-4"
          inputStyle="text-sm py-2.5 px-2 placeholder-[#A0A5B1] placeholder:font-normal"
        />

        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          label="Password"
          labelStyle="text-xs !mb-0.5 mt-4"
          inputStyle="text-sm py-2.5 px-2 placeholder-[#A0A5B1] placeholder:font-normal"
          showToggleIcon={true}
        />

        {!isSignUp && (
  <div className="text-right mt-1">
    <button
      type="button"
      className="text-sm text-[var(--primary-button)] hover:underline cursor-pointer"
      onClick={() => {
        router.push("/forgot-password")
      }}
    >
      Forgot Password?
    </button>
  </div>
)}

        {isSignUp && passwordError && (
          <p className="text-red-500 text-sm -mt-2">{passwordError}</p>
        )}

        {isSignUp && (
          <>
            <InputField
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
              labelStyle="text-xs !mb-0.5 mt-4"
              inputStyle="text-sm py-2.5 px-2 placeholder-[#A0A5B1] placeholder:font-normal"
              showToggleIcon={true}
              showPassword={showConfirmPassword}
              togglePasswordVisibility={() =>
                setShowConfirmPassword((prev) => !prev)
              }
            />
            {formData.confirmPassword &&
              formData.password !== formData.confirmPassword && (
                <p className="text-red-500 text-sm -mt-2">
                  Passwords do not match
                </p>
              )}
          </>
        )}

        {isSignUp && (
          <div className="flex items-center space-x-8 mt-4">
            <label className="flex items-center gap-2 text-sm font-semibold text-[var(--primary-text)]">
              <input
                type="checkbox"
                checked={roles.tutor}
onChange={() => setRoles({ tutor: true, student: false })}                className="accent-[var(--primary-button)] !text-white"
              />
              Tutor
            </label>
            <label className="flex items-center gap-2 text-sm font-semibold text-[var(--primary-text)]">
              <input
                type="checkbox"
                checked={roles.student}
onChange={() => setRoles({ tutor: false, student: true })}                className="accent-[var(--primary-button)]"
              />
              Student
            </label>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className={`w-full mt-8 cursor-pointer ${
            isSubmitDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[var(--primary-button)] hover:bg-[var(--primary-hover)]"
          } text-white font-semibold py-2 rounded flex justify-center items-center gap-2 `}
        >
          {isSignUp ? "SIGN UP" : "SIGN IN"} <span className="text-lg">→</span>
        </button>

        <div className="text-center text-sm text-gray-400 my-2">or</div>

        <CustomButton
          title="Sign up with Google"
          IconLeft={GoogleIcon}
          bgVariant="outline"
          textVariant="secondary"
        />
        <CustomButton
          title="Sign up with Apple"
          IconLeft={AppleIcon}
          bgVariant="outline"
          textVariant="secondary"
        />
      </form>
    </div>
  );
}
