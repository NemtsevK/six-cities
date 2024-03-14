import {createReducer} from '@reduxjs/toolkit';
import {Cities, AuthorizationStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';
import {CityName} from '../types/city-name.ts';
import {Review} from '../types/review.ts';

import {
  setCurrentCity,
  setOffers,
  loadOffers,
  loadFavoriteOffers,
  loadComments,
  requireAuthorization,
} from './action.ts';

type InitialStateProp = {
  offers: Offer[];
  favoriteOffers: Offer[];
  currentCity: CityName;
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitialStateProp = {
  offers: [],
  favoriteOffers: [],
  currentCity: Cities.Paris,
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
