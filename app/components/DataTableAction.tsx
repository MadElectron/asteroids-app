import { Tooltip } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { tableActions } from "@/app/utils/variables";

export default function DataTableAction({
  type,
  onClick,
}: {
  type: TableActionType;
  onClick?: () => void;
}) {
  if (!tableActions[type]) {
    return null;
  }

  const { color, icon, title, label } = tableActions[type];

  /**
   * @ts-ignore is added because showInMenu is not set but required in type
   */
  return (
    <Tooltip title={title}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <GridActionsCellItem
        icon={icon}
        label={label}
        onClick={onClick}
        color={color}
      />
    </Tooltip>
  );
}
