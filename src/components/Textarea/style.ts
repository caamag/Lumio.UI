import { type TextareaProps } from "./textarea.type";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

export const Textarea = styled.textarea<TextareaProps>`
  width: ${(p) => p.width ?? "100%"};
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: "4px";
  font-size: ${(p) => (p.size ? `${p.size}px` : "12px")};
  color: ${Colors.primary};

  border: ${(p) =>
    p.variant === "dotted"
      ? `1px dotted ${Colors.primary}`
      : `1px solid ${Colors.primary}`};

  &:hover {
    border-color: ${Colors.primaryHover};
    border-style: ${(p) => (p.variant === "dotted" ? "dashed" : "solid")};

    box-shadow: ${(p) =>
      p.variant === "normal" ? `1px 1px 5px ${Colors.whiteBlue}` : ""};
  }

  &:disabled {
    background-color: ${Colors.primary}20;
    border-color: ${Colors.primary}20;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Colors.primary};
  }
`;
