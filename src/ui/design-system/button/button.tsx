import clsx from "clsx";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
  icon?: any;
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
    case "accent": /* DEFAULT */
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
      variantStyles = "";
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = "text-caption3 font-medium px-[14px] py-[12px]";
      break;
    case "medium": 
      sizeStyles = "text-caption3 font-medium px-[18px] py-[15px]"
      break;
    case "large":
      sizeStyles = "text-caption3 font-medium px-[20px] py-[18px]"
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
        {children}
      </button>
    </>
  );
};

export default Button;
