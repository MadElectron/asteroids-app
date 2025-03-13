import { Paper } from "@mui/material";
import { ruRU } from "@mui/x-data-grid/locales";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataGrid, GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import DataTableActions from "./DataTableActionsCell";

export default function DataTable({
  rows,
  columns,
}: {
  rows: GridValidRowModel[];
  columns: GridColDef<GridValidRowModel>[];
}) {
  const theme = createTheme({}, ruRU);
  columns = [
    ...columns,
    {
      field: "",
      headerName: "Действия",
      renderCell: DataTableActions,
      sortable: false,
      width: 150,
      disableColumnMenu: true,
      disableReorder: true,
      disableExport: true,
      editable: false,
      display: "flex",
    },
  ];

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <DataGrid rows={rows} columns={columns} />
      </ThemeProvider>
    </Paper>
  );
}
