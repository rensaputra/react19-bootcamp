import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = ({
  type = "button",
  onClick,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(className, "custom-btn")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
