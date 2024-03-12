import {createAction} from '@reduxjs/toolkit';
import {CityName} from '../types/city-name.ts';
import {Offer} from '../types/offer.ts';

export const setOffers = createAction('offers/change', (offers: Offer[]) => ({
  payload: offers
}));

export const setCurrentCity = createAction('offers/setCurrentCity', (currentCityName: CityName) => ({
  payload: currentCityName
}));
