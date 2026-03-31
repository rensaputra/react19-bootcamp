import { Input } from "./Input";
import { cn } from "@/lib/utils";
/**
 * Switch (toggle) component — pure CSS/Tailwind, no JS state needed.
 *
 * Structure:
 *   <label>                          — clickable wrapper, toggles the hidden checkbox
 *     <Input type="checkbox" />      — real checkbox, visually hidden (sr-only)
 *                                      marked as `peer` so siblings can react to its state
 *     <div>                          — visible track (the pill-shaped background)
 *       ::after                      — the thumb (white circle that slides left/right)
 *   </label>
 *
 * How the toggle works:
 *   - The checkbox is hidden but remains in the DOM as a Tailwind `peer`.
 *   - The track <div> listens for the checkbox state via `peer-checked:` variants:
 *       • peer-checked:bg-blue-600              → track turns blue when ON
 *       • peer-checked:after:translate-x-full   → thumb slides right when ON
 *       • rtl:peer-checked:after:-translate-x-full → thumb slides LEFT in RTL layouts
 *   - `after:transition-all` makes the slide animated smoothly.
 */

const Switch = ({
  name,
  className,
  defaultValue,
}: {
  name: string;
  className?: string;
  defaultValue?: string;
}) => {
  return (
    <label
      className={cn("inline-flex items-center cursor-pointer w-fit", className)}
    >
      <Input
        type="checkbox"
        name={name}
        className="sr-only peer"
        defaultChecked={defaultValue === "on"}
      />
      <div
        className="relative w-16 h-8 bg-gray-200 rounded-full after:content-['']
                    after:absolute after:top-0.5 after:start-[4px] after:bg-white after:rounded-full
                    after:h-7 after:w-7 after:transition-all peer peer-checked:after:translate-x-full 
                    rtl:peer-checked:after:-translate-x-full peer-checked:bg-blue-600"
      />
    </label>
  );
};

export default Switch;
