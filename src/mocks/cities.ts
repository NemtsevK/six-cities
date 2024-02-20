import {Cities} from '../types/cities.ts';

export const cities: Cities = [
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
    },
  },
  {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
    },
  },
];

export class Location {
}

export class City {
}
