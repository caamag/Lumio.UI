import { type TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "normal" | "dotted";
  resize?: "none" | "both" | "horizontal" | "vertical";
  size?: number;
  width?: string;
}
