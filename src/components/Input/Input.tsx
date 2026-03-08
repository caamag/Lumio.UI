import * as _ from "./style";
import { type InputProps } from "./Input.type";
import { CiSearch } from "react-icons/ci";
import { useTheme } from "../../theme/useTheme";

export const Input = ({
  variant = "normal",
  icon = <CiSearch />,
  ...rest
}: InputProps) => {
  const theme = useTheme();

  return (
    <_.InputContainer
      variant={variant}
      width={rest.width}
      colors={theme.colors}
    >
      <_.Input variant={variant ?? "normal"} {...rest} colors={theme.colors} />
      {rest.hasIcon &&
        (typeof icon === "string" ? <img src={icon} alt="icon" /> : icon)}
    </_.InputContainer>
  );
};
