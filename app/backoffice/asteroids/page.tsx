"use client";
import { getAsteroidsList } from "@/app/api/asteroids";
import DataTable from "@/app/components/DataTable";
import PageTitle from "@/app/components/PageTitle";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import columns from "@/app/columns/asteroids";
import { convertData } from "@/app/utils/convertData";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import "dayjs/locale/ru";

export default function Page() {
  const [data, setData] = useState<Asteroid[]>([]);
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(1, "week"));

  const getData = () => {
    getAsteroidsList({
      startDate: startDate?.format("YYYY-MM-DD") || "",
      endDate: endDate?.format("YYYY-MM-DD") || "",
      detailed: false,
    }).then((res) => {
      const data = convertData(res.data) as Asteroid[];
      setData(data);
    });
  };

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue as Dayjs);

    console.log(newValue, startDate?.isAfter(endDate));
    if (newValue && newValue?.isAfter(endDate)) {
      setEndDate(newValue.add(1, "week"));
    }

    getData();
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue as Dayjs);

    if (newValue && newValue?.isBefore(startDate)) {
      setStartDate(newValue.subtract(1, "week"));
    }

    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <PageTitle>Астероиды</PageTitle>
      <Box sx={{ my: 2, display: "flex", gap: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
          <DatePicker
            value={startDate}
            label="Дата начала поиска"
            onChange={handleStartDateChange}
          />
          <DatePicker
            value={endDate}
            label="Дата конца поиска"
            onChange={handleEndDateChange}
          />
        </LocalizationProvider>
      </Box>

      <DataTable rows={data} columns={columns} noActions />
    </Box>
  );
}
