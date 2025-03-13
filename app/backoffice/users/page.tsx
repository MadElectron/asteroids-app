"use client";

import { Box } from "@mui/material";
import { GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import DataTable from "@/app/components/DataTable";
import Title from "@/app/components/Title";

export default function Page() {
  const data: User[] = [
    {
      id: 1,
      firstName: "Александр",
      middleName: "Петрович",
      lastName: "Иванов",
      email: "alexander.ivanov@example.com",
      role: "superadmin",
    },
    {
      id: 2,
      firstName: "Елена",
      middleName: "Владимировна",
      lastName: "Смирнова",
      email: "elena.smirnova@example.com",
      role: "admin",
    },
    {
      id: 3,
      firstName: "Дмитрий",
      middleName: "Николаевич",
      lastName: "Кузнецов",
      email: "dmitry.kuznetsov@example.com",
      role: "user",
    },
    {
      id: 4,
      firstName: "Наталья",
      middleName: "Александровна",
      lastName: "Попова",
      email: "natalia.popova@example.com",
      role: "admin",
    },
    {
      id: 5,
      firstName: "Сергей",
      middleName: "Васильевич",
      lastName: "Михайлов",
      email: "sergey.mikhailov@example.com",
      role: "superadmin",
    },
    {
      id: 6,
      firstName: "Ольга",
      middleName: "Ивановна",
      lastName: "Николаева",
      email: "olga.nikolaeva@example.com",
      role: "user",
    },
    {
      id: 7,
      firstName: "Владимир",
      middleName: "Петрович",
      lastName: "Соколов",
      email: "vladimir.sokolov@example.com",
      role: "admin",
    },
    {
      id: 8,
      firstName: "Екатерина",
      middleName: "Владимировна",
      lastName: "Дмитриева",
      email: "ekaterina.dmitrieva@example.com",
      role: "superadmin",
    },
  ];

  const columns: GridColDef<GridValidRowModel>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "firstName",
      headerName: "Имя",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Фамилия",
      width: 150,
    },
    {
      field: "middleName",
      headerName: "Отчество",
      width: 150,
    },
    {
      field: "email",
      headerName: "Электронная почта",
      width: 250,
    },
    {
      field: "role",
      headerName: "Роль",
      width: 100,
    },
  ];

  return (
    <Box>
      <Title>Пользователи</Title>

      <DataTable rows={data} columns={columns} />
    </Box>
  );
}
