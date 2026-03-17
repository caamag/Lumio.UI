import * as _ from "./style";
import { type BadgeProps } from "./Badge.types";

export const Badge = ({ variant, children, ...rest }: BadgeProps) => {
  return (
    <_.BadgeContainer variant={variant} {...rest}>
      {children}
    </_.BadgeContainer>
  );
};
