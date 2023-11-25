import clsx from "clsx";
import { IconProps } from "@/types/iconProps";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  isDisabled,
  isLoading,
  children,
}: ButtonProps) => {
  let variantStyles: string = "";
  let sizeStyles: string = "";
  let iconSize: number = 0;

  switch (variant) {
    case "accent" /* DEFAULT */:
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "icon":
      if (iconTheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "icon"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      iconSize = 18;
      break;
    case "medium": // Default
      sizeStyles = `text-caption3 font-medium ${
        variant === "icon"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      iconSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption3 font-medium ${
        variant === "icon"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[20px] py-[18px]"
      }`;
      iconSize = 24;
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(variantStyles, sizeStyles, "")}
        onClick={() => console.log("click")}
        disabled={isDisabled}
      >
        {icon && variant === "icon" ? (
          <icon.icon size={iconSize} />
        ) : (
          <div>
            <div className={clsx(icon && "flex items-center gap-2")}>
              {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
              {children}
              {icon && iconPosition === "right" && (
                <icon.icon size={iconSize} />
              )}
            </div>
          </div>
        )}
      </button>
    </>
  );
};

export default Button;
