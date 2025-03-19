type AuthData = {
  username: string;
  password: string;
};

type Role = "superadmin" | "admin" | "user";

type User = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  role: Role;
};

type AsteroidsRequestParams = {
  startDate: string;
  endDate: string;
  detailed: boolean;
  apiKey?: string;
};

type Asteroid = {
  id: number;
  name: string;
  absoluteMagnitudeH: number;
  estimatedDiameterMin: number;
  estimatedDiameterMax: number;
  relativeVelocity: number;
  missDistance: number;
  isPotentiallyHazardousAsteroid: boolean;
};

type BarChartData = {
  axis: string[];
  series: { data: number[] }[];
};
