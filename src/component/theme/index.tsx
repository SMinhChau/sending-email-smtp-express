import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { amber, blue, blueGrey, deepOrange, grey } from "@mui/material/colors";
import { createContext, useEffect, useMemo, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext({ toggleColorMode: () => {} });

const WrapperTheme: React.FC<Props> = ({ children }: Props) => {
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: blue,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            background: {
              default: blue[50],
              paper: blue[50],
            },
          }
        : {
            primary: blueGrey,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: grey[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  });

  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        console.log("toggleColorMode >>>");
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default WrapperTheme;
