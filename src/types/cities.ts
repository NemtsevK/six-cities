export type Location = {
  latitude: number;
  longitude: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Cities = City[];
