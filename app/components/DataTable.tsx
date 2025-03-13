import { Paper } from "@mui/material";
import { ruRU } from "@mui/x-data-grid/locales";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  DataGrid,
  GridColDef,
  GridValidRowModel,
  GridRowParams,
  GridRowId,
} from "@mui/x-data-grid";
import DataTableAction from "@/app/components/DataTableAction";

export default function DataTable({
  rows,
  columns,
  deleteRow,
  editRow,
  viewRow,
  addRow,
}: {
  rows: GridValidRowModel[];
  columns: GridColDef<GridValidRowModel>[];
  deleteRow: (id: GridRowId) => void;
  editRow: (id: GridRowId) => void;
  viewRow: (id: GridRowId) => void;
  addRow: () => void;
}) {
  const theme = createTheme({}, ruRU);
  columns = [
    ...columns,
    {
      type: "actions",
      field: "actions",
      headerName: "Действия",
      sortable: false,
      width: 150,
      disableColumnMenu: true,
      disableReorder: true,
      disableExport: true,
      editable: false,
      display: "flex",
      getActions: ({ id }: GridRowParams<GridValidRowModel>) => {
        return [
          <DataTableAction
            onClick={handleViewClick(id)}
            type="view"
            key="view"
          />,
          <DataTableAction
            onClick={handleEditClick(id)}
            type="edit"
            key="edit"
          />,
          <DataTableAction
            onClick={handleDeleteClick(id)}
            type="delete"
            key="delete"
          />,
        ];
      },
    },
  ];

  const handleViewClick = (id: GridRowId) => () => {
    viewRow(id);
  };
  const handleEditClick = (id: GridRowId) => () => {
    editRow(id);
  };
  const handleDeleteClick = (id: GridRowId) => () => {
    deleteRow(id);
  };
  const handleAddClick = () => {
    addRow();
  };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <DataGrid rows={rows} columns={columns} />
      </ThemeProvider>
    </Paper>
  );
}
