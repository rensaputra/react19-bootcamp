import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: (string | boolean | undefined)[]) {
  return twMerge(clsx(classNames));
}
