import { cn } from "@/lib/utils";

export default function Label({
  className,
  required,
  children,
}: {
  className?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("text-sm lg:text-base h-fit", className)}>
      <label>{children}</label>
      <span className="text-red-500">{required && "*"}</span>
    </div>
  );
}
