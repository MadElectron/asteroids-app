import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import { JSX, useEffect, useState } from "react";
import { roles } from "../utils/variables";

export default function UserForm({
  user,
  onSubmit,
}: {
  user: User;
  onSubmit: (user: User) => void;
}) {
  const roleItems: JSX.Element[] = Object.entries(roles).map(
    ([name, label]) => (
      <MenuItem value={name} key={name}>
        {label}
      </MenuItem>
    )
  );

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    role: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<unknown> | SelectChangeEvent<unknown>
  ) => {
    const { name, value } = e.target as HTMLInputElement;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = { ...user, ...values };
    onSubmit(newUser as User);
  };

  useEffect(() => {
    if (user) {
      setValues(user);
    }
  }, [user]);

  return (
    <Box
      component={"form"}
      sx={{
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        required
        id="firstName"
        name="firstName"
        label="Имя"
        value={values.firstName}
        onChange={handleChange}
      />
      <TextField
        required
        id="middleName"
        name="middleName"
        label="Отчество"
        value={values.middleName}
        onChange={handleChange}
      />
      <TextField
        required
        id="lastName"
        name="lastName"
        label="Фамилия"
        value={values.lastName}
        onChange={handleChange}
      />
      <TextField
        required
        id="email"
        name="email"
        label="Электронная почта"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <FormControl>
        <InputLabel id="role-label">Роль</InputLabel>
        <Select
          required
          id="role"
          name="role"
          label="Роль"
          labelId="role-label"
          onChange={handleChange}
          value={values.role}
        >
          {roleItems}
        </Select>
      </FormControl>

      <Button
        component="button"
        type="submit"
        variant="contained"
        onClick={submit}
      >
        Сохранить
      </Button>
    </Box>
  );
}
