import * as _ from "./style";
import { type TextareaProps } from "./textarea.type";
import { useTheme } from "../../theme/useTheme";

export const Textarea = ({ variant = "normal", ...rest }: TextareaProps) => {
  const theme = useTheme();
  return <_.Textarea variant={variant} colors={theme.colors} {...rest} />;
};
