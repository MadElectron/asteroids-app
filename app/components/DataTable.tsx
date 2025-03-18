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
  loading,
  rows,
  columns,
  noActions,
  deleteRow,
  editRow,
  viewRow,
}: {
  loading: boolean;
  rows: GridValidRowModel[];
  columns: GridColDef<GridValidRowModel>[];
  noActions?: boolean;
  deleteRow?: (id: GridRowId) => void;
  editRow?: (id: GridRowId) => void;
  viewRow?: (id: GridRowId) => void;
}) {
  const theme = createTheme({}, ruRU);
  if (!noActions) {
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
  }

  const handleViewClick = (id: GridRowId) => () => {
    if (!viewRow) return;
    viewRow(id);
  };
  const handleEditClick = (id: GridRowId) => () => {
    if (!editRow) return;
    editRow(id);
  };
  const handleDeleteClick = (id: GridRowId) => () => {
    if (!deleteRow) return;
    deleteRow(id);
  };

  return (
    <Paper sx={{ height: 400 }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          loading={loading}
          rows={rows}
          columns={columns}
          slotProps={{
            loadingOverlay: {
              variant: "skeleton",
              noRowsVariant: "skeleton",
            },
          }}
        />
      </ThemeProvider>
    </Paper>
  );
}
