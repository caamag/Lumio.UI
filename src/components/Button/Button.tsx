import { type ButtonProps } from "./Button.types";
import { useTheme } from "../../theme/useTheme";
import * as _ from "./style";

export const Button = ({
  variant = "isPrimary",
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <_.Button variant={variant ?? "isPrimary"} {...rest} colors={theme.colors}>
      {children}
    </_.Button>
  );
};
