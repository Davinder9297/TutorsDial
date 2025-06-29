import InputField from "../common/input";
import CustomButton from "../common/button";

interface Props {
  email: string;
  setEmail: (email: string) => void;
  onNext: () => void;
}

export default function ForgotPasswordForm({ email, setEmail, onNext }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Email is required");
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded mx-auto p-6 relative">
      <h2 className="text-xl font-bold text-center mb-2 text-[var(--primary-text)]">Forget Password</h2>
      <p className="text-sm text-center text-gray-500 mb-4">
        Enter the email address or mobile phone number associated with your account.
      </p>
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
                    labelStyle="text-xs !mb-0.5"
            inputStyle="text-sm py-2.5 px-2 placeholder-[#A0A5B1] placeholder:font-normal"
      />
<CustomButton
        title="SEND CODE"
        type="submit"
        className={`mt-6 cursor-pointer ${!email.trim() ? 'bg-gray-400 cursor-not-allowed' : ''}`}
        disabled={!email.trim()}
      />    </form>
  );
}
