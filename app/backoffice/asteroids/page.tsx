"use client";
import { getAsteroidsList } from "@/app/api/asteroids";
import DataTable from "@/app/components/DataTable";
import PageTitle from "@/app/components/PageTitle";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import columns from "@/app/columns/asteroids";
import { values, flatten } from "lodash";

export default function Page() {
  const [data, setData] = useState<Asteroid[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const convertData = (data: any): Asteroid[] => {
    console.log(data.near_earth_objects);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return flatten(values(data.near_earth_objects)).map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        absoluteMagnitudeH: item.absolute_magnitude_h,
        estimatedDiameterMin:
          item.estimated_diameter.meters.estimated_diameter_min,
        estimatedDiameterMax:
          item.estimated_diameter.meters.estimated_diameter_max,
        relativeVelocity:
          item.close_approach_data[0].relative_velocity.kilometers_per_second,
        missDistance: item.close_approach_data[0].miss_distance.kilometers,
        isPotentiallyHazardousAsteroid: item.is_potentially_hazardous_asteroid,
      };
    });
  };

  useEffect(() => {
    getAsteroidsList({
      startDate: "2025-03-11",
      endDate: "2025-03-12",
      detailed: false,
    }).then((res) => {
      const data = convertData(res.data) as Asteroid[];
      setData(data);
    });
  }, []);

  return (
    <Box>
      <PageTitle>Астероиды</PageTitle>

      <DataTable rows={data} columns={columns} noActions />
    </Box>
  );
}
