import { type BadgeProps } from "./Badge.types";
import styled from "styled-components";
import { defaultTheme } from "../../theme/defaultTheme";

export const BadgeContainer = styled.span<BadgeProps>`
  background-color: ${(props) => {
    switch (props.variant) {
      case "success":
        return defaultTheme.colors.success;
      case "error":
        return defaultTheme.colors.danger;
      case "warning":
        return defaultTheme.colors.warning;
      default:
        return defaultTheme.colors.primary;
    }
  }};

  border-radius: ${(props) => props.radius ?? 4}px;
  padding: ${(props) => props.padding ?? "6px"};
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: 150ms;

  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case "success":
          return defaultTheme.colors.successHover;
        case "error":
          return defaultTheme.colors.dangerHover;
        case "warning":
          return defaultTheme.colors.warningHover;
        default:
          return defaultTheme.colors.primaryHover;
      }
    }};
  }
`;
