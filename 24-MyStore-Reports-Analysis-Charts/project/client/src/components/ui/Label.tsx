import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type LabelProps = ComponentPropsWithoutRef<"label"> & {
  required?: boolean;
};

const Label = ({ className, children, required, ...props }: LabelProps) => {
  return (
    <label className={cn("text-sm lg:text-base h-fit", className)} {...props}>
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
