import { cn } from "@/lib/utils";

export function Button({
  type,
  onclick,
  className,
  children,
}: {
  type?: "submit" | "button" | "reset";
  onclick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={cn("custom-submit-btn", className)}
    >
      {children}
    </button>
  );
}
