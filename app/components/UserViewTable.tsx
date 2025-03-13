import { Table, TableBody, TableRow, TableCell } from "@mui/material";
import columns from "@/app/columns/users";

export default function UserViewTable({ user }: { user: User }) {
  const rows = columns
    .filter((col) => col.field !== "id")
    .map((col) => (
      <TableRow key={col.field}>
        <TableCell
          component="th"
          scope="row"
          sx={{ fontWeight: "bold", borderBottom: "none" }}
        >
          {col.headerName}
        </TableCell>
        <TableCell sx={{ borderBottom: "none" }}>
          {user[col.field as keyof User]}
        </TableCell>
      </TableRow>
    ));

  return (
    <Table size="small">
      <TableBody>{rows}</TableBody>
    </Table>
  );
}
