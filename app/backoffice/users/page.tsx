"use client";

import { Box, Button } from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";
import DataTable from "@/app/components/DataTable";
import PageTitle from "@/app/components/PageTitle";
import DeleteDialog from "@/app/components/DeleteDialog";
import { useEffect, useState } from "react";
import UserViewDialog from "@/app/components/UserViewDialog";
import columns from "@/app/columns/users";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/store/users";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useAppStore } from "@/app/store/app";

export default function Page() {
  const router = useRouter();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [id, setId] = useState<GridRowId>("");
  const { users, setUsers, removeUser } = useUserStore();
  const { notify } = useAppStore();

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
  const handleAddRowClick = () => {
    router.push("/backoffice/users/add");
  };

  const deleteUser = () => {
    setDeleteDialogOpen(false);
    removeUser(id as number);
    notify({
      message: `Пользователь {ID: ${id}} успешно удалён`,
      variant: "success",
    });
  };

  useEffect(() => {
    if (users.length === 0) {
      setUsers();
    }
  }, [users, setUsers]);

  return (
    <Box>
      <PageTitle>Пользователи</PageTitle>

      <Button sx={{ mb: 2 }} variant="contained" onClick={handleAddRowClick}>
        <AddBoxIcon sx={{ mr: 1 }} />
        Добавить
      </Button>
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
        user={users.find((user) => user.id === (id as number))!}
        open={viewDialogOpen}
        cancel={() => setViewDialogOpen(false)}
      />
    </Box>
  );
}
