import {City, Location} from '../mocks/cities.ts';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Offers = Offer[];
