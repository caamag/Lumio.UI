import styled from "styled-components";
import { type InputProps } from "./Input.type";

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
    color: ${(p) => p.colors?.primary};
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
        ? `1px dotted ${p.colors?.primary}`
        : `1px solid ${p.colors?.primary}`};

  border-bottom: ${(p) =>
    p.variant === "underlined" ? `1px solid ${p.colors?.primary}` : ""};

  &:hover {
    border-color: ${(p) => p.colors?.primaryHover};
    border-style: ${(p) =>
      p.variant === "dotted"
        ? "dashed"
        : p.variant === "underlined"
          ? "none"
          : "solid"};

    border-bottom: ${(p) =>
      p.variant === "underlined" ? `1px solid ${p.colors?.primaryHover}` : ""};

    box-shadow: ${(p) =>
      p.variant === "normal" ? `1px 1px 5px ${p.colors?.whiteBlue}` : ""};
  }

  &.disabled,
  &[data-disabled="true"] {
    background-color: ${(p) => p.colors?.whiteGrey};
    border-color: transparent;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  font-size: ${(p) => (p.size ? `${p.size}px` : "12px")};
  color: ${(p) => p.colors?.primary};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(p) => p.colors?.primary};
  }

  &:disabled {
    background-color: ${(p) => p.colors?.whiteGrey};
    border-color: "transparent";
    cursor: not-allowed;
  }
`;
