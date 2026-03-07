import * as _ from "./style";
import { type TextareaProps } from "./textarea.type";

export const Textarea = ({ variant = "normal", ...rest }: TextareaProps) => {
  return <_.Textarea variant={variant} {...rest} />;
};
