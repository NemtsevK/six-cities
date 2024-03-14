import {Offer} from './types/offer.ts';

import {MAX_RATING} from './const.ts';

export function getRatingWidth(rating: number) {
  return `${Math.round(rating / MAX_RATING) * 100}%`;
}

function sortByRating(itemA: Offer, itemB: Offer) {
  return itemB.rating - itemA.rating;
}

function sortFromLowToHigh(itemA: Offer, itemB: Offer) {
  return itemA.price - itemB.price;
}

function sortFromHighToLow(itemA: Offer, itemB: Offer) {
  return itemB.price - itemA.price;
}

export const sorting = {
  Popular: (offers: Offer[]) => offers.slice(),
  HighToLow: (offers: Offer[]) => offers.toSorted(sortFromHighToLow),
  LowToHigh: (offers: Offer[]) => offers.toSorted(sortFromLowToHigh),
  TopRating: (offers: Offer[]) => offers.toSorted(sortByRating),
};
