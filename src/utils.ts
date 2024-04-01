import {Offer, Offers} from './types/offer.ts';
import {MAX_RATING, SortingMap} from './const.ts';

export const getRatingWidth = (rating: number) => `${Math.round(rating / MAX_RATING) * 100}%`;

const sortByRating = (itemA: Offer, itemB: Offer) => itemB.rating - itemA.rating;

const sortLowToHighPrice = (itemA: Offer, itemB: Offer) => itemA.price - itemB.price;

const sortHighToLowPrice = (itemA: Offer, itemB: Offer) => itemB.price - itemA.price;

export function sortingOffers(sortOption: string, offers: Offers) {
  switch (sortOption) {
    case SortingMap.Popular:
      break;
    case SortingMap.LowToHighPrice:
      offers.sort(sortLowToHighPrice);
      break;
    case SortingMap.TopRatedFirst:
      offers.sort(sortByRating);
      break;
    case SortingMap.HighToLowPrice:
      offers.sort(sortHighToLowPrice);
      break;
    default:
      break;
  }

  return offers;
}

export const filterOffersByCityName = (
  cityOffers: Offers,
  cityName: string,
): Offers => cityOffers.filter((offer) => offer.city.name === cityName);

export const pluralize = (count: number): string => count > 1 ? 's' : '';
