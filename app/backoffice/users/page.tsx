"use client";

import { Box } from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";
import DataTable from "@/app/components/DataTable";
import PageTitle from "@/app/components/PageTitle";
import DeleteDialog from "@/app/components/DeleteDialog";
import { useState } from "react";
import UserViewDialog from "@/app/components/UserViewDialog";
import users from "@/app/mock/users";
import columns from "@/app/columns/users";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [id, setId] = useState<GridRowId>("");

  const handleDeleteRowClick = (id: GridRowId) => {
    setId(id);
    setDeleteDialogOpen(true);
  };
  const handleViewRowClick = (id: GridRowId) => {
    setId(id);
    setViewDialogOpen(true);
  };
  const handleEditRowClick = (id: GridRowId) => {
    router.push(`/backoffice/users/${id}`);
  };
  const handleAddRowClick = () => {};

  const deleteUser = () => {
    setDeleteDialogOpen(false);
    console.log("User deleted");
  };

  return (
    <Box>
      <PageTitle>Пользователи</PageTitle>

      <DataTable
        rows={users}
        columns={columns}
        viewRow={(id) => handleViewRowClick(id)}
        deleteRow={(id) => handleDeleteRowClick(id)}
        editRow={(id) => handleEditRowClick(id)}
        addRow={handleAddRowClick}
      />

      <DeleteDialog
        id={id}
        open={deleteDialogOpen}
        ok={deleteUser}
        cancel={() => setDeleteDialogOpen(false)}
      />

      <UserViewDialog
        user={users.find((user) => user.id === id)!}
        open={viewDialogOpen}
        cancel={() => setViewDialogOpen(false)}
      />
    </Box>
  );
}
