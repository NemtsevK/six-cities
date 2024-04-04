import {TOffer, TOffers} from './types/offer.ts';
import {MAX_RATING, SortingMap} from './const.ts';

export const getRatingWidth = (rating: number) => `${Math.round(rating / MAX_RATING) * 100}%`;

const sortByRating = (itemA: TOffer, itemB: TOffer) => itemB.rating - itemA.rating;

const sortLowToHighPrice = (itemA: TOffer, itemB: TOffer) => itemA.price - itemB.price;

const sortHighToLowPrice = (itemA: TOffer, itemB: TOffer) => itemB.price - itemA.price;

export function sortingOffers(sortOption: string, offers: TOffers) {
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
  cityOffers: TOffers,
  cityName: string,
): TOffers => cityOffers.filter((offer) => offer.city.name === cityName);

export const pluralize = (count: number): string => count > 1 ? 's' : '';
