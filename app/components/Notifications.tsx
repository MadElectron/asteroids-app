import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useAppStore } from "@/app/store/app";
import { useEffect } from "react";

export default function Notifications() {
  useEffect(() =>
    useAppStore.subscribe((state) => {
      const snack = state.notifications.pop() as Snack;

      if (snack) {
        const { message, variant } = snack;
        enqueueSnackbar(message, { variant });
      }
    })
  );
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }} />
  );
}
