import * as _ from "./style";
import { type InputProps } from "./Input.type";
import { CiSearch } from "react-icons/ci";

export const Input = ({
  variant = "normal",
  icon = <CiSearch />,
  ...rest
}: InputProps) => {
  return (
    <_.InputContainer variant={variant} width={rest.width}>
      <_.Input variant={variant ?? "normal"} {...rest} />
      {rest.hasIcon &&
        (typeof icon === "string" ? <img src={icon} alt="icon" /> : icon)}
    </_.InputContainer>
  );
};
