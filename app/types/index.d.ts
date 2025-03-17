type TableActionType = "edit" | "delete" | "view";

type Role = "superadmin" | "admin" | "user";

type SessionPayload = {
  userId: number;
  expiresAt: Date;
};

type Snack = {
  message: string;
  variant: "success" | "info" | "warning" | "error";
};
