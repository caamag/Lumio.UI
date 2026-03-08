import { type InputHTMLAttributes, type JSX } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "normal" | "underlined" | "dotted";
  width?: string;
  hasIcon?: boolean;
  icon?: string | JSX.Element;
  size?: number;
  colors?: Record<string, string>;
}
