import { type TextareaProps } from "./textarea.type";
import styled from "styled-components";

export const Textarea = styled.textarea<TextareaProps>`
  width: ${(p) => p.width ?? "100%"};
  padding: 1rem;
  box-sizing: border-box;
  border-radius: "4px";
  font-size: ${(p) => (p.size ? `${p.size}px` : "12px")};
  color: ${(p) => p.colors?.primary};
  border-radius: 4px;

  resize: ${(p) =>
    p.resize === "both" || p.resize === "vertical"
      ? "vertical"
      : p.resize === "horizontal"
        ? "horizontal"
        : "none"};

  border: ${(p) =>
    p.variant === "dotted"
      ? `1px dotted ${p.colors?.primary}`
      : `1px solid ${p.colors?.primary}`};

  &:hover {
    border-color: ${(p) => p.colors?.primaryHover};
    border-style: ${(p) => (p.variant === "dotted" ? "dashed" : "solid")};

    box-shadow: ${(p) =>
      p.variant === "normal" ? `1px 1px 5px ${p.colors?.whiteBlue}` : ""};
  }

  &:disabled {
    background-color: ${(p) => p.colors?.primary}20;
    border-color: ${(p) => p.colors?.primary}20;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(p) => p.colors?.primary};
  }
`;
