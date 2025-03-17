type TableActionType = "edit" | "delete" | "view";

type Role = "superadmin" | "admin" | "user";

type SessionPayload = {
  userId: number;
  expiresAt: Date;
};
