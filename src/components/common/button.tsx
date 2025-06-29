import { ButtonProps } from "@/types/common";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-[var(--secondary-button)]";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-600";
      case "disabled":
      return "bg-green-600";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
      case "white":
      return "bg-white";
    default: // "primary"
      return "bg-[var(--primary-button)]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-[var(--primary-button)]";
    case "secondary":
      return "text-[var(--secondary-button)]";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`w-full cursor-pointer rounded-xl py-3 px-10 flex flex-row justify-center items-center ${getBgVariantStyle(
        bgVariant
      )} ${className}`}
      {...props}
    >
      {IconLeft && (
        <div className={`pr-3 text-xl ${getTextVariantStyle(textVariant)}`}>
          <IconLeft />
        </div>
      )}
      <p className={`text-lg font-medium ${getTextVariantStyle(textVariant)}`}>{title}</p>
      {IconRight && (
        <div className={`pl-3 text-xl ${getTextVariantStyle(textVariant)}`}>
          <IconRight />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
