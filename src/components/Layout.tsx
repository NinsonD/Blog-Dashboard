import { Box, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Top AppBar */}
      <Header />

      {/* Main content with sidebar */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Page content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
          <Toolbar /> {/* Spacer for fixed AppBar */}
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
// This component serves as the main layout for the application.
// It includes the Header and Sidebar components, and wraps the main content area.
