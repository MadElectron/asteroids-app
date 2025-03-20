"use client";

import { getAsteroidsList } from "@/app/api/asteroids";
import { useEffect, useState } from "react";
import {
  convertDataByHazardousness,
  convertDataByMissDistance,
} from "@/app/utils/asteroids";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Box, Stack } from "@mui/material";
import PageTitle from "@/app/components/PageTitle";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AsteroidsMissDistanceChart from "@/app/components/charts/AsteroidsMissDistance";
import AsteroidsHazardousnessChart from "@/app/components/charts/AsteroidsHazardousness";
import { useAppStore } from "@/app/store/app";
import { DateField } from "@mui/x-date-pickers";

export default function Page() {
  const { notify } = useAppStore();
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(1, "week"));
  const [dataByMissDistance, setDataByMissDistance] = useState<BarChartData>({
    axis: [],
    series: [],
  });
  const [dataByHazardousness, setDataByHazardousness] = useState<
    [number, number]
  >([0, 0]);

  const getData = () => {
    setLoading(true);
    getAsteroidsList({
      startDate: startDate?.format("YYYY-MM-DD") || "",
      endDate: endDate?.format("YYYY-MM-DD") || "",
      detailed: false,
    })
      .then((res) => {
        setLoading(false);
        setDataByMissDistance(convertDataByMissDistance(res.data));
        setDataByHazardousness(convertDataByHazardousness(res.data));

        console.log(
          convertDataByMissDistance(res.data),
          convertDataByHazardousness(res.data)
        );
      })
      .catch((error) => {
        notify({
          message: error?.message || "Неизвестная ошибка",
          variant: "error",
        });
        setLoading(false);
      });
  };

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue as Dayjs);

    if (newValue) {
      setEndDate(newValue.add(1, "week"));
    }

    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <PageTitle>Статистика за неделю</PageTitle>
      <Box sx={{ my: 2, display: "flex", gap: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
          <DatePicker
            value={startDate}
            label="Дата начала поиска"
            onChange={handleStartDateChange}
          />
          <DateField disabled value={endDate} label="Дата конца поиска" />
        </LocalizationProvider>
      </Box>

      <Stack
        spacing={{ xs: 6, md: 2 }}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <AsteroidsMissDistanceChart
          loading={loading}
          data={dataByMissDistance}
        />
        <AsteroidsHazardousnessChart
          loading={loading}
          data={dataByHazardousness}
        />
      </Stack>
    </Box>
  );
}
