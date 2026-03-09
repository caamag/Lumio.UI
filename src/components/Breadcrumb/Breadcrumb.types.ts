export interface BreadcrumbStyleProps {
  fontSize?: number;
  fontFamily?: string;
  colors?: Record<string, string>;
  isLastItemFilled?: boolean;
}

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export interface BreadcrumbProps extends BreadcrumbStyleProps {
  items: BreadcrumbItem[];
}
