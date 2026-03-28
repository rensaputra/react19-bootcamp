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
      className={cn(
        "rounded font-medium text-white text-base lg:text-lg leading-5 lg:leading-6 bg-blue-700 hover:shadow-xl disabled:pointer-events-none disabled:bg-gray-50 disabled:text-black/50 px-5 py-3",
        className,
      )}
    >
      {children}
    </button>
  );
}
