import { ComponentPropsWithoutRef } from "react";

type LabelProps = ComponentPropsWithoutRef<"label"> & {
  required?: boolean;
};
const Label = ({ children, required, ...props }: LabelProps) => {
  return (
    <label {...props}>
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
