import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success" | "white"| "disabled";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<unknown>;
  IconRight?: React.ComponentType<unknown>;
  className?: string;
}

export declare interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  tintColor?: string;
  Icon?: React.ComponentType<unknown>;
  labelStyle?: string;
  inputStyle?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  showToggleIcon?: boolean;
  togglePasswordVisibility?: () => void;
  showPassword?: boolean;
}

export declare interface TextAresProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  tintColor?: string;
  Icon?: React.ComponentType<unknown>;
  labelStyle?: string;
  inputStyle?: string;
  className?: string;
  placeholder?: string;
  rows?: number;
}
