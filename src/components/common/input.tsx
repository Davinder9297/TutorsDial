"use client";
import { InputFieldProps } from "@/types/common";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const InputField = ({
  label,
  Icon,
  labelStyle,
  inputStyle,
  type = "text",
  showToggleIcon= false,
  showPassword: externalShowPassword,
  togglePasswordVisibility,
  placeholder,
  className,
  ...props
}: InputFieldProps) => {
  const [internalShowPassword, setInternalShowPassword] = useState(false);
  const isControlled = typeof externalShowPassword === "boolean";
  const showPassword = isControlled ? externalShowPassword : internalShowPassword;

  const inputType = showToggleIcon ? (showPassword ? "text" : "password") : type;

  const handleToggle = () => {
    if (isControlled && togglePasswordVisibility) togglePasswordVisibility();
    else setInternalShowPassword(prev => !prev);
  };

  return (
    <div className={"my-2 w-full text-gray-900"}>
      {label && <p className={`text-lg font-semibold mb-3 ${labelStyle}`}>{label}</p>}
      <div
        className={`flex flex-row justify-start items-center relative bg-white rounded-xl border ${className}`}
      >
        {Icon && (
          <div className="pl-4 text-xl text-gray-400">
            <Icon />
          </div>
        )}
        <input
          // placeholderTextColor={"#a3a3a3"}
          className={`rounded-xl w-full  p-4 font-semibold ${inputStyle} text-left outline-primary-500`}
          type={inputType}
          placeholder={placeholder}
          {...props}
        />
        {showToggleIcon && (
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={handleToggle}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
