import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function Aside() {
  return (
    <Drawer
      component={"aside"}
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          pt: 12,
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List id="list">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
