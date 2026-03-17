import * as _ from "./style";
import { type BreadcrumbProps } from "./Breadcrumb.types";
import { useTheme } from "../../theme/useTheme";

export const Breadcrumb = ({
  items,
  isLastItemFilled = true,
  fontSize = 14,
  ...rest
}: BreadcrumbProps) => {
  const theme = useTheme();

  return (
    <_.BreadcrumbContainer {...rest} colors={theme.colors}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <_.BreadcrumbItem
            key={index}
            isCurrent={isLast}
            colors={theme.colors}
            isLastItemFilled={isLastItemFilled}
            fontSize={fontSize}
          >
            <a href={item.href}>{item.label}</a>
            {index < items.length - 1 && " / "}
          </_.BreadcrumbItem>
        );
      })}
    </_.BreadcrumbContainer>
  );
};
