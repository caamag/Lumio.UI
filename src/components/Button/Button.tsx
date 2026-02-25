import { type ButtonProps } from "./Button.types";
import * as _ from "./style";

export function Button({
  variant = "isPrimary",
  children,
  ...rest
}: ButtonProps) {
  return (
    <_.Button variant={variant ?? "isPrimary"} {...rest}>
      {children}
    </_.Button>
  );
}
