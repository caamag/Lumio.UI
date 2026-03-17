import styled from "styled-components";
import { type ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: ${(p) => (p.size ? p.size + "px" : "14px")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 250ms;
  width: ${(p) => (p.width ? p.width + "px" : "auto")};

  color: ${(p) => (p.variant === "isEmpty" ? p.colors?.primary : "white")};

  background-color: ${(p) =>
    p.variant === "isPrimary"
      ? p.colors?.primary
      : p.variant === "isEmpty"
        ? "transparent"
        : p.colors?.danger};

  border: 1px solid
    ${(p) => (p.variant === "isEmpty" ? p.colors?.primary : "transparent")};

  &:hover {
    background-color: ${(p) =>
      p.variant === "isPrimary"
        ? p.colors?.primaryHover
        : p.variant === "isEmpty"
          ? p.colors?.primary
          : p.colors?.dangerHover};
    color: ${(p) => (p.variant === "isEmpty" ? "white" : "white")};
  }

  &:disabled {
    background-color: ${(p) => p.colors?.whiteGrey};
    cursor: not-allowed;
  }
`;
