import {City} from './types/city.ts';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const AVATAR_URL = 'https://i.pravatar.cc/128';

export const HOTEL_IMAGE_URL = 'https://loremflickr.com/260/200/hotel';

export const MAX_RATING = 5;

export const MIN_COMMENT_LENGTH = 50;

export const MAX_COMMENT_LENGTH = 300;

export const RATING_MAP = {
  '5': 'excellent',
  '4': 'good',
  '3': 'not bad',
  '2': 'bad',
  '1': 'terrible'
};

export const URL_MARKER_DEFAULT = './img/pin.svg';

export const URL_MARKER_ACTIVE = './img/pin-active.svg';

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
];

export const DEFAULT_CITY = CITIES[3];
