/* eslint-disable @typescript-eslint/no-explicit-any */
import { values, keys, flatten, countBy } from "lodash";

export const convertData = (data: any): Asteroid[] => {
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

export const convertDataByMissDistance = (data: any): BarChartData => {
  const objects = data.near_earth_objects;

  return {
    axis: keys(objects),
    series: values(objects).map((items: any) => ({
      data: items.map(
        (item: any) =>
          item.close_approach_data[0].miss_distance.kilometers / 1000000
      ),
    })),
  };
};

export const convertDataByHazardousness = (data: any): [number, number] => {
  const countedData = countBy(
    flatten(values(data.near_earth_objects)),
    (item) => item.is_potentially_hazardous_asteroid
  );

  return [countedData.true, countedData.false];
};
