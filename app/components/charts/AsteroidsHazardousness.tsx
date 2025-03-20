import { Box, Typography } from "@mui/material";
import { DefaultizedPieValueType } from "@mui/x-charts";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";

export default function AsteroidsHazardousness({
  data,
  loading,
}: {
  data: [number, number];
  loading: boolean;
}) {
  const palette = ["#f50057", "#00e676"];
  const series = [
    {
      arcLabel: (item: DefaultizedPieValueType) => `${item.value || ""}`,
      data: [
        { id: 0, value: data[0], label: "Опасные" },
        { id: 1, value: data[1], label: "Неопасные" },
      ],
    },
  ];

  return (
    <Box height={400}>
      <Typography sx={{ mb: 2 }}>
        Число астероидов по потенциальной опасности
      </Typography>
      <PieChart
        loading={loading}
        width={400}
        slotProps={{
          loadingOverlay: { message: "Загрузка..." },
          noDataOverlay: { message: "Нет данных" },
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "left" },
          },
        }}
        series={series}
        colors={palette}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: "bold",
            fontSize: "24px",
          },
        }}
      />
    </Box>
  );
}
