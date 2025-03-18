import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function Aside({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
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
