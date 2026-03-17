type Colors = typeof defaultTheme.colors;

export interface Theme {
  colors: Colors;
}

export const defaultTheme = {
  colors: {
    primary: "#5b4dac",
    whiteBlue: "rgba(100, 72, 168, 0.5)",
    danger: "#ca0f34",
    primaryHover: "#372a82",
    dangerHover: "#a00b28",
    warning: "#efb963",
    warningHover: "#e1922b",
    whiteGrey: "#c6c6c6",
    link: "#7b66f7",
    success: "#45dc68",
    successHover: "#13852f",
  },
};
