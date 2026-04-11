import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

export default function Input({ type, className, ...props }: InputProps) {
  return (
    <input type={type} className={cn("custom-input", className)} {...props} />
  );
}
