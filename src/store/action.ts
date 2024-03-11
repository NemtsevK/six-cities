import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city-name';
import { Offer } from '../types/offer';

export const setOffers = createAction('offers/change', (offers: Offer[]) => ({
  payload: offers
}));
export const setCurrentCity = createAction('offers/setCurrentCity', (currentCityName: CityName) => ({
  payload: currentCityName
}));
