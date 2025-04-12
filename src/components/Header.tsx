import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeMode } from "../theme/context/ThemeContext";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const { toggleTheme } = useThemeMode();
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ zIndex: 1201 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Urbio Blog Dashboard</Typography>
        <IconButton onClick={toggleTheme} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
// // This component represents the header of the application.
// // It includes the title of the application and a button to toggle between light and dark themes using Material-UI's AppBar and IconButton components.
