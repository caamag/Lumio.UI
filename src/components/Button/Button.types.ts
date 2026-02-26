import { type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "isPrimary" | "isEmpty" | "isDanger";
  size?: number;
  width?: number;
}
