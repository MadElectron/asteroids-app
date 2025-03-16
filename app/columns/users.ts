import { GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import { roles } from "@/app/utils/variables";

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
    renderCell: (params) => roles[params.value as Role] || "",
    width: 170,
  },
];

export default columns;
