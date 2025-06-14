import { useEffect, useState } from "react";
import InputField from "../common/input";
import CustomButton from "../common/button";
import { useRouter } from "next/navigation";
import { validatePassword } from "./loginForm";

interface Props {
  email: string;
}

export default function ResetPasswordForm({ email }: Props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!password.trim()) {
      setPasswordError("");
      setIsSubmitDisabled(true);
    } else {
      const error = validatePassword(password);
      setPasswordError(error);
      setIsSubmitDisabled(
        !!error || password !== confirmPassword
      );
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const error = validatePassword(password);
    if (error) {
      alert(error);
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password successfully reset for " + email);
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded mx-auto relative">
      <h2 className="text-xl font-bold text-center mb-2 text-[var(--primary-text)]">Reset Password</h2>
      <p className="text-sm text-center text-gray-500 mb-4">
        Enter a new password below to reset your account.
      </p>

      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        showToggleIcon
                    labelStyle="text-xs !mb-0.5"
            inputStyle="text-sm py-2.5 px-2 placeholder-[#A0A5B1] placeholder:font-normal"

      />
      {password && passwordError && (
        <p className="text-red-500 text-sm -mt-2 mb-1">{passwordError}</p>
      )}

      <InputField
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        label="Confirm Password"
        showToggleIcon
                    labelStyle="text-xs !mb-0.5"
            inputStyle="text-sm py-2.5 px-2 placeholder-[#A0A5B1] placeholder:font-normal"
      />
      {confirmPassword && password !== confirmPassword && (
        <p className="text-red-500 text-sm -mt-2 mb-1">Passwords do not match</p>
      )}

      <CustomButton
        title="RESET PASSWORD"
        type="submit"
        className={`mt-6 ${isSubmitDisabled ? "bg-gray-400 cursor-not-allowed" : ""}`}
        disabled={isSubmitDisabled}
      />
    </form>
  );
}