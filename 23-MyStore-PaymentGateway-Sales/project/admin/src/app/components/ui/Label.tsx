import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type LabelProps = ComponentPropsWithoutRef<"label"> & {
  required?: boolean;
};
export default function Label({ className, required, children }: LabelProps) {
  return (
    <div className={cn("text-sm lg:text-base h-fit", className)}>
      <label>{children}</label>
      <span className="text-red-500">{required && "*"}</span>
    </div>
  );
}
