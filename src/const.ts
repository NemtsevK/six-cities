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

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const DEFAULT_CITY = Cities.Paris;

export const SortingMap = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRating: 'Top rated first'
} as const;

export const DEFAULT_SORTING_OPTION = SortingMap.Popular;
