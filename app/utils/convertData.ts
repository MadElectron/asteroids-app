import { values, flatten } from "lodash";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertData = (data: any): Asteroid[] => {
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
