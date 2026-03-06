import styled from "styled-components";
import { type InputProps } from "./Input.type";
import { Colors } from "../../global/Colors";

export const InputContainer = styled.div<InputProps>`
  padding: ${(p) =>
    p.variant === "underlined" ? "0.5rem 1rem 0.5rem 0.25rem" : "0.5rem 1rem"};
  width: ${(p) => p.width || "100%"};
  box-sizing: border-box;
  border-radius: ${(p) => (p.variant === "underlined" ? "0" : "4px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 250ms;

  svg {
    font-size: 18px;
    color: ${Colors.primaryHover};
  }

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }

  border: ${(p) =>
    p.variant === "underlined"
      ? "none"
      : p.variant === "dotted"
        ? `1px dotted ${Colors.primary}`
        : `1px solid ${Colors.primary}`};

  border-bottom: ${(p) =>
    p.variant === "underlined" ? `1px solid ${Colors.primary}` : ""};

  &:hover {
    border-color: ${Colors.primaryHover};
    border-style: ${(p) =>
      p.variant === "dotted"
        ? "dashed"
        : p.variant === "underlined"
          ? "none"
          : "solid"};

    border-bottom: ${(p) =>
      p.variant === "underlined" ? `1px solid ${Colors.primaryHover}` : ""};

    box-shadow: ${(p) =>
      p.variant === "normal" ? `1px 1px 5px ${Colors.whiteBlue}` : ""};
  }

  &:disabled {
    background-color: ${Colors.primary}20;
    border-color: ${Colors.primary}20;
    cursor: not-allowed;
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  font-size: ${(p) => (p.size ? `${p.size}px` : "12px")};
  color: ${Colors.primary};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Colors.primary};
  }
`;
