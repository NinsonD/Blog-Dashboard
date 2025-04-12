import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext({
  toggleTheme: () => {},
  mode: "light" as "light" | "dark",
});

export const useThemeMode = () => useContext(ThemeContext);

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  //Load theme from localStorage on mount
  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode === "dark" || storedMode === "light") {
      setMode(storedMode);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode); //Save to localStorage
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#008060" },
          secondary: { main: "#00B4D8" },
          background: {
            default: mode === "dark" ? "#121212" : "#f5f5f5",
            paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
          },
        },
        typography: {
          fontFamily: "'Inter', sans-serif",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
// // This component provides a custom theme context for the application.
// // It allows toggling between light and dark themes and applies the selected theme to the Material-UI components.
