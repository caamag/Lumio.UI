import type { ReactNode } from "react";

export type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "success" | "error" | "warning";
  radius?: number;
  padding?: string;
};
