import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer.ts';
import {Reviews} from '../types/review.ts';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {CityName} from '../types/city-name.ts';

export const setCurrentCity = createAction<CityName>('offers/setCurrentCity');

export const loadOffers = createAction<Offers>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const loadFavoriteOffers = createAction<Offers>('data/loadFavoriteOffers');
export const setFavoriteOffersDataLoadingStatus = createAction<boolean>('data/setFavoriteOffersDataLoadingStatus');

export const toggleFavoriteOffer = createAction<Offer>('app/toggleFavoriteOffer');

export const loadOffer = createAction<Offer>('data/loadOffer');
export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

export const loadComments = createAction<Reviews>('data/loadComments');
export const setCommentsDataLoadingStatus = createAction<boolean>('data/setCommentsDataLoadingStatus');

export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');
export const setNearbyOffersDataLoadingStatus = createAction<boolean>('data/setNearbyOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
