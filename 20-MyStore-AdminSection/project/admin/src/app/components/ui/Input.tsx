import { cn } from "@/lib/utils";

export function Input({
  type,
  className,
  ...props
}: {
  type?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  name?: string;
}) {
  return (
    <input type={type} className={cn("custom-input", className)} {...props} />
  );
}
