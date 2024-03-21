import {Offer} from './types/offer.ts';
import {MAX_RATING} from './const.ts';

export const getRatingWidth = (rating: number) => `${Math.round(rating / MAX_RATING) * 100}%`;

const sortByRating = (itemA: Offer, itemB: Offer) => itemB.rating - itemA.rating;

const sortFromLowToHigh = (itemA: Offer, itemB: Offer) => itemA.price - itemB.price;

const sortFromHighToLow = (itemA: Offer, itemB: Offer) => itemB.price - itemA.price;

export const sorting = {
  Popular: (offers: Offer[]) => offers.slice(),
  HighToLow: (offers: Offer[]) => offers.toSorted(sortFromHighToLow),
  LowToHigh: (offers: Offer[]) => offers.toSorted(sortFromLowToHigh),
  TopRating: (offers: Offer[]) => offers.toSorted(sortByRating),
};
