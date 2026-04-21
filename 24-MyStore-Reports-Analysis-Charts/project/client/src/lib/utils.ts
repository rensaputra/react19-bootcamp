import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | boolean | undefined)[]) {
  return twMerge(clsx(inputs));
}

export function objectToQueryString(obj: {
  [key: string]: string | string[] | undefined;
}): string {
  const params = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value && value !== null && value !== undefined && value !== "") {
      params.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
      );
    }
  }
  return params.join("&");
}
