import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import UserViewTable from "./UserViewTable";

export default function DeleteDialog({
  user,
  cancel,
  open,
}: {
  user: User;
  cancel: () => void;
  open: boolean;
}) {
  return (
    <Dialog open={open} aria-labelledby="view-dialog-title">
      <DialogTitle id="view-dialog-title">
        Пользователь ID: {user?.id}
      </DialogTitle>

      <DialogContent>
        <UserViewTable user={user} />
      </DialogContent>

      <DialogActions>
        <Button onClick={cancel} variant="outlined">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
}
