import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CookieIcon from "@mui/icons-material/Cookie";
import { useRouter, usePathname } from "next/navigation";
import { useAppStore } from "@/app/store/app";

export default function Aside({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { setAppLoading } = useAppStore();

  const handleRouteChange = (path: string) => {
    onClose();

    if (pathname !== path) {
      setAppLoading(true);
      router.push(path);
    }
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          pt: 5,
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List id="list">
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleRouteChange("/backoffice/users")}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Пользователи" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleRouteChange("/backoffice/asteroids")}
          >
            <ListItemIcon>
              <CookieIcon />
            </ListItemIcon>
            <ListItemText primary="Астероиды" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
