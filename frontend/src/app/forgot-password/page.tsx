"use client";

import { useState } from "react";
import AuthScreen from "@/components/common/authScreen";
import ForgotPasswordForm from "@/components/login/forgotPasswordForm";
import VerifyCodeForm from "@/components/login/verifyCode";
import ResetPasswordForm from "@/components/login/resetPassword";

export default function ForgotPasswordFlow() {
  const [step, setStep] = useState<"email" | "verify" | "reset">("email");
  const [email, setEmail] = useState("");

  return (
    <AuthScreen>
    <>
      {step === "email" && (
        <ForgotPasswordForm
          email={email}
          setEmail={setEmail}
          onNext={() => setStep("verify")}
        />
      )}
      {step === "verify" && (
        <VerifyCodeForm
          email={email}
          onNext={() => setStep("reset")}
          onBack={() => setStep("email")}
        />
      )}
      {step === "reset" && <ResetPasswordForm email={email} />}
    </>
    </AuthScreen>
  );
}
