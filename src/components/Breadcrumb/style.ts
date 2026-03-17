import styled from "styled-components";
import { type BreadcrumbStyleProps } from "./Breadcrumb.types";

export const BreadcrumbContainer = styled.nav<BreadcrumbStyleProps>`
  font-family: ${(p) => p.fontFamily ?? "Arial, sans-serif"};
  font-size: ${(p) => p.fontSize ?? 14}px;
  color: ${(p) => p.colors?.whiteGrey} !important;
  font-weight: 400;
`;

export const BreadcrumbItem = styled.span<
  BreadcrumbStyleProps & { isCurrent?: boolean }
>`
  a {
    color: ${(p) =>
      p.isLastItemFilled
        ? p.isCurrent
          ? p.colors?.primary
          : p.colors?.whiteGrey
        : p.colors?.link};
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
