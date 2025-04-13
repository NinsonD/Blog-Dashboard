import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import NextLink from "next/link";

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
        <NextLink href="/" passHref legacyBehavior>
          <ListItem button component="a">
            <ListItemText primary="Dashboard" />
          </ListItem>
        </NextLink>
        <NextLink href="/posts" passHref legacyBehavior>
          <ListItem button component="a">
            <ListItemText primary="Posts" />
          </ListItem>
        </NextLink>
        <NextLink href="/add-post" passHref legacyBehavior>
          <ListItem button component="a">
            <ListItemText primary="Add Post" />
          </ListItem>
        </NextLink>
      </List>
    </Drawer>
  );
};

export default Sidebar;
// // This component represents the sidebar of the blog dashboard.
// // It contains links to different sections of the application, such as Dashboard, Posts, and Add Post.
