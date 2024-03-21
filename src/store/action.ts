import {createAction} from '@reduxjs/toolkit';
import {CityName} from '../types/city-name.ts';
import {Offer} from '../types/offer.ts';
import {Review} from '../types/review.ts';
import {AuthorizationStatus} from '../const.ts';

export const setOffers = createAction('offers/change', (offers: Offer[]) => ({
  payload: offers
}));

export const setCurrentCity = createAction('offers/setCurrentCity', (currentCityName: CityName) => ({
  payload: currentCityName
}));

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadFavoriteOffers = createAction<Offer[]>('data/loadFavoriteOffers');

export const loadComments = createAction<Review[]>('data/loadComments');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');
