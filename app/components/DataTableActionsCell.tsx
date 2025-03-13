import DataTableAction from "./DataTableAction";

export default function DataTableActions() {
  return (
    <>
      <DataTableAction type="view" />
      <DataTableAction type="edit" />
      <DataTableAction type="delete" />
    </>
  );
}
