import {TOffer, TOffers} from './types/offer.ts';
import {SortingMap} from './const.ts';

export const getRatingWidth = (rating: number) => `${(Math.round(rating) * 20).toString()}%`;

export const filterOffersByCityName = (
  cityOffers: TOffers,
  cityName: string,
): TOffers => cityOffers.filter((offer) => offer.city.name === cityName);

export const pluralize = (count: number): string => count > 1 ? 's' : '';

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

export function capitalizeFirstLetter(string?: string) {
  if (string) {
    return string.charAt(0)?.toUpperCase() + string.slice(1);
  }
}

export function getRandomCityName(cities: string[]) {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}
