import { GridColDef, GridValidRowModel } from "@mui/x-data-grid";

const columns: GridColDef<GridValidRowModel>[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "name",
    headerName: "Название",
    width: 150,
  },
  {
    field: "absoluteMagnitudeH",
    headerName: "Абс. звёздная величина",
    width: 200,
  },
  {
    field: "estimatedDiameterMin",
    headerName: "Рассчётный диаметр мин., км",
    width: 200,
  },
  {
    field: "estimatedDiameterMax",
    headerName: "Рассчётный диаметр макс., км",
    width: 200,
  },
  {
    field: "relativeVelocity",
    headerName: "Относительная скорость, км/с",
    width: 200,
  },
  {
    field: "missDistance",
    headerName: "Расстояние до земли, км",
    width: 200,
  },
  {
    field: "isPotentiallyHazardousAsteroid",
    headerName: "Потенциально опасен",
    width: 200,
    renderCell: (params) => {
      return params.value ? "Да" : "Нет";
    },
  },
];

export default columns;
