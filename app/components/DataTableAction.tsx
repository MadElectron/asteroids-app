// import { PaletteOptions } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function DataTableAction({ type }: { type: TableAction }) {
  if (type === "view") {
    return <ArticleIcon color="primary" sx={{ cursor: "pointer" }} />;
  } else if (type === "edit") {
    return <EditNoteIcon color="warning" sx={{ cursor: "pointer" }} />;
  } else if (type === "delete") {
    return <DeleteOutlineIcon color="error" sx={{ cursor: "pointer" }} />;
  }
}
