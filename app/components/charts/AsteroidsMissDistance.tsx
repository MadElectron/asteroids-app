import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function AsteroidsMissDistance({
  data,
  loading,
}: {
  data: BarChartData;
  loading: boolean;
}) {
  const { axis, series } = data;

  return (
    <Box
      width={{ md: "100%" }}
      sx={{ overflow: { xs: "scroll", sm: "unset" } }}
    >
      <Typography sx={{ mb: 2 }}>
        Расстояние от астероида до земли, млн. км
      </Typography>
      <BarChart
        loading={loading}
        slotProps={{
          loadingOverlay: { message: "Загрузка..." },
          noDataOverlay: { message: "Нет данных" },
        }}
        series={series}
        height={290}
        xAxis={[{ data: axis, scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </Box>
  );
}
