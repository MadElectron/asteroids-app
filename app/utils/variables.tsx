import ArticleIcon from "@mui/icons-material/Article";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { JSX } from "react";

export const tableActions: Record<
  TableActionType,
  {
    icon: JSX.Element;
    color: string;
    title: string;
    label: string;
  }
> = {
  view: {
    icon: <ArticleIcon />,
    color: "primary",
    title: "Просмотр",
    label: "view",
  },
  edit: {
    icon: <EditNoteIcon />,
    color: "warning",
    title: "Редактировать",
    label: "edit",
  },
  delete: {
    icon: <DeleteOutlineIcon />,
    color: "error",
    title: "Удалить",
    label: "delete",
  },
};
