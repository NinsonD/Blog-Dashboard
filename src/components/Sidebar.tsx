import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
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
        <Link href="/" passHref legacyBehavior>
          <ListItemButton component="a">
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Link>

        <Link href="/posts" passHref legacyBehavior>
          <ListItemButton component="a">
            <ListItemText primary="Posts" />
          </ListItemButton>
        </Link>

        <Link href="/add-post" passHref legacyBehavior>
          <ListItemButton component="a">
            <ListItemText primary="Add Post" />
          </ListItemButton>
        </Link>
      </List>
    </Drawer>
  );
};

export default Sidebar;
// This component renders a sidebar navigation menu using Material-UI's Drawer component.
// It contains links to different pages of the application: Dashboard, Posts, and Add Post. The sidebar is styled to be permanent and takes up a fixed width of 240 pixels.
