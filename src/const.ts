export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAX_RATING = 5;

export const MIN_COMMENT_LENGTH = 50;

export const MAX_COMMENT_LENGTH = 300;

export const ratingsData = [
  {value: '5', title: 'perfect'},
  {value: '4', title: 'good'},
  {value: '3', title: 'not bad'},
  {value: '2', title: 'badly'},
  {value: '1', title: 'terribly'},
];

export const cities = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
} as const;

const DEFAULT_ZOOM = 12;

export const cityCoordinates = [
  {
    name: 'PARIS',
    location: {
      latitude: 48.85341,
      longitude: 2.3488,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'COLOGNE',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'BRUSSELS',
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'AMSTERDAM',
    location: {
      latitude: 52.37454,
      longitude: 4.889689,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'HAMBURG',
    location: {
      latitude: 53.551086,
      longitude: 10.000654,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'DUSSELDORF',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: DEFAULT_ZOOM,
    },
  },
];

export enum SortingMap {
  Popular = 'Popular',
  LowToHighPrice = 'Price: low to high',
  HighToLowPrice = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const MAX_NEAR_OFFERS = 3;

export const MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT = 3;
