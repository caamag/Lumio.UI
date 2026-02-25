import styled from "styled-components";
import { type ButtonProps } from "./Button.types";
import { Colors } from "../../global/Colors";

export const Button = styled.button<ButtonProps>`
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: ${(p) => (p.size ? p.size + "px" : "14px")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 250ms;

  color: ${(p) => (p.variant === "isEmpty" ? Colors.primary : "white")};

  background-color: ${(p) =>
    p.variant === "isPrimary"
      ? Colors.primary
      : p.variant === "isEmpty"
        ? "transparent"
        : Colors.red};

  border: 1px solid
    ${(p) => (p.variant === "isEmpty" ? Colors.primary : "transparent")};

  &:hover {
    background-color: ${(p) =>
      p.variant === "isPrimary"
        ? Colors.primaryHover
        : p.variant === "isEmpty"
          ? Colors.primary
          : Colors.redHover};
    color: ${(p) => (p.variant === "isEmpty" ? "white" : "white")};
  }

  &:disabled {
    background-color: ${Colors.whiteGrey};
    cursor: not-allowed;
  }
`;
