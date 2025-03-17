type AuthData = {
  username: string;
  password: string;
};

type Role = "superadmin" | "admin" | "user";

type User = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  role: Role;
};
