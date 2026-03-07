type Colors = typeof defaultTheme.colors;

export interface Theme {
  colors: Colors;
}

export const defaultTheme = {
  colors: {
    primary: "#5b4dac",
    whiteBlue: "rgba(100, 72, 168, 0.5)",
    red: "#ca0f34",
    primaryHover: "#372a82",
    redHover: "#a00b28",
    whiteGrey: "#e1e1e1",
  },
};
