import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {Review} from '../types/review.ts';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {CityName} from '../types/city-name.ts';

export const setCurrentCity = createAction<CityName>('offers/setCurrentCity');

export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const loadFavoriteOffers = createAction<Offer[]>('data/loadFavoriteOffers');
export const setFavoriteOffersDataLoadingStatus = createAction<boolean>('data/setFavoriteOffersDataLoadingStatus');

export const toggleFavoriteOffer = createAction<Offer>('app/toggleFavoriteOffer');

export const loadOffer = createAction<Offer>('data/loadOffer');
export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

export const loadComments = createAction<Review[]>('data/loadComments');
export const setCommentsDataLoadingStatus = createAction<boolean>('data/setCommentsDataLoadingStatus');

export const loadNearOffers = createAction<Offer[]>('data/loadNearOffers');
export const setNearOffersDataLoadingStatus = createAction<boolean>('data/setNearOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
