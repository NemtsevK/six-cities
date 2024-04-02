import {TCity, TLocation} from './city.ts';

export type THost = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
}

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
};

export type TOffers = TOffer[];
