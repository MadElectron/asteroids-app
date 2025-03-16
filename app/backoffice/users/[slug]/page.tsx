"use client";

import PageTitle from "@/app/components/PageTitle";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { roles } from "@/app/utils/variables";
import { JSX, useState } from "react";

export default function Page() {
  const router = useRouter();
  const { slug } = useParams();

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
    console.log(values);

    /**
     * @todo set to state
     */
  };

  return (
    <>
      <Button
        onClick={() => {
          router.push("/backoffice/users");
        }}
      >
        К списку пользователей
      </Button>
      <PageTitle>Редактировать пользователя ID: {slug}</PageTitle>

      <Box
        component={"form"}
        sx={{ maxWidth: 400, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          required
          id="firstName"
          name="firstName"
          label="Имя"
          onChange={handleChange}
        />
        <TextField
          required
          id="middleName"
          name="middleName"
          label="Отчество"
          onChange={handleChange}
        />
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Фамилия"
          onChange={handleChange}
        />
        <TextField
          required
          id="email"
          name="email"
          label="Электронная почта"
          type="email"
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
    </>
  );
}
