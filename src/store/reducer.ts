import {createReducer} from '@reduxjs/toolkit';
import {Cities, AuthorizationStatus} from '../const.ts';
import {Offer, Offers} from '../types/offer.ts';
import {Reviews} from '../types/review.ts';
import {CityName} from '../types/city-name.ts';

import {
  loadComments,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  requireAuthorization,
  setCurrentCity,
  setFavoriteOffersDataLoadingStatus,
  setOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setCommentsDataLoadingStatus,
  setNearbyOffersDataLoadingStatus,
} from './action.ts';

type InitialStateProp = {
  offer: Offer;
  offers: Offers;
  favoriteOffers: Offers;
  nearbyOffers: Offers;
  city: CityName;
  comments: Reviews;
  authorizationStatus: AuthorizationStatus;
  isOfferDataLoading: boolean;
  isOffersDataLoading: boolean;
  isCommentsDataLoading: boolean;
  isNearbyOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
}

const initialState: InitialStateProp = {
  offer: {} as Offer,
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  city: Cities.Paris,
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOfferDataLoading: false,
  isOffersDataLoading: false,
  isCommentsDataLoading: false,
  isNearbyOffersDataLoading: false,
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
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setNearbyOffersDataLoadingStatus, (state, action) => {
      state.isNearbyOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
