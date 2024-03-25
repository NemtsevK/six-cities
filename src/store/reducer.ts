import {createReducer} from '@reduxjs/toolkit';
import {Cities, AuthorizationStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';
import {Review} from '../types/review.ts';
import {CityName} from '../types/city-name.ts';

import {
  loadComments,
  loadFavoriteOffers,
  loadNearOffers,
  loadOffer,
  loadOffers,
  requireAuthorization,
  setCurrentCity,
  setFavoriteOffersDataLoadingStatus,
  setOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setCommentsDataLoadingStatus,
  setNearOffersDataLoadingStatus,
} from './action.ts';

type InitialStateProp = {
  offer: Offer;
  offers: Offer[];
  favoriteOffers: Offer[];
  nearOffers: Offer[];
  city: CityName;
  comments: Review[];
  authorizationStatus: AuthorizationStatus;
  isOfferDataLoading: boolean;
  isOffersDataLoading: boolean;
  isCommentsDataLoading: boolean;
  isNearOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
}

const initialState: InitialStateProp = {
  offer: {} as Offer,
  offers: [],
  favoriteOffers: [],
  nearOffers: [],
  city: Cities.Paris,
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOfferDataLoading: false,
  isOffersDataLoading: false,
  isCommentsDataLoading: false,
  isNearOffersDataLoading: false,
  isFavoriteOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setFavoriteOffersDataLoadingStatus, (state, action) => {
      state.isFavoriteOffersDataLoading = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setCommentsDataLoadingStatus, (state, action) => {
      state.isCommentsDataLoading = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setNearOffersDataLoadingStatus, (state, action) => {
      state.isNearOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
