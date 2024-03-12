import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, setOffers} from './action.ts';
import {DEFAULT_CITY} from '../const.ts';
import {Offer} from '../types/offer.ts';
import {CityName} from '../types/city-name.ts';

type InitialStateProp = {
  offers: Offer[];
  favoriteOffers: Offer[];
  currentCity: CityName;
}

const initialState: InitialStateProp = {
  offers: [],
  favoriteOffers: [],
  currentCity: DEFAULT_CITY,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
