import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} href="/posts">
          <ListItemText primary="Posts" />
        </ListItem>
        <ListItem button component={Link} href="/add-post">
          <ListItemText primary="Add Post" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
// This component represents the sidebar of the application.
// It uses Material-UI's Drawer component to create a permanent sidebar with navigation links to different pages.
