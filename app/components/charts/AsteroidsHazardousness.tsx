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
    <Box width={500}>
      <Typography sx={{ mb: 2 }}>
        Число астероидов по потенциальной опасности
      </Typography>
      <PieChart
        loading={loading}
        slotProps={{
          loadingOverlay: { message: "Загрузка..." },
          noDataOverlay: { message: "Нет данных" },
        }}
        series={series}
        colors={palette}
        height={290}
        width={500}
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
