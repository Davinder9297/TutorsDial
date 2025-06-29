import InputField from "../common/input";
import CustomButton from "../common/button";
import { useState } from "react";

interface Props {
  email: string;
  onNext: () => void;
  onBack: () => void;
}

export default function VerifyCodeForm({ email, onNext }: Props) {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) return; // extra safety
    onNext(); // Proceed to reset password
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded mx-auto relative">
      <h2 className="text-xl font-bold text-center mb-2 text-[var(--primary-text)]">
        Verify Your Email Address
      </h2>
      <p className="text-sm text-center text-gray-500 mb-4">
        Enter the verification code sent to <strong>{email}</strong>.
      </p>

      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium">Verification Code</label>
        <button
          type="button"
          className="text-sm text-blue-500 hover:underline cursor-pointer"
          onClick={() => alert("Resend code")}
        >
          Resend Code
        </button>
      </div>

      <InputField
        type="text"
        name="code"
        placeholder="Enter code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        label="Verification Code"
        labelStyle="text-xs !mb-0.5"
        inputStyle="text-sm py-2.5 px-2 placeholder-[#A0A5B1] placeholder:font-normal"
      />

      <CustomButton
        title="VERIFY ME"
        type="submit"
        disabled={code.length !== 6}
        className={`mt-6 ${
          code.length !== 6 ? "bg-gray-400 cursor-not-allowed" : ""
        }`}
      />
    </form>
  );
}
