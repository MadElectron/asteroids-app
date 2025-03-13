import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";

export default function DeleteDialog({
  id,
  ok,
  cancel,
  open,
}: {
  id: GridRowId;
  ok: () => void;
  cancel: () => void;
  open: boolean;
}) {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Удалить запись ID: {id}?
      </DialogTitle>

      <DialogActions>
        <Button onClick={cancel} variant="outlined">
          Отмена
        </Button>
        <Button onClick={ok} color="error" variant="outlined" autoFocus>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
}
