import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_CITY} from '../const';
import {Offer} from '../types/offer';
import {setCurrentCity, setOffers} from './action';
import {CityName} from '../types/city-name';

const initialState = {
  offers: [] as Offer[],
  favoriteOffers: [] as Offer[],
  currentCity: DEFAULT_CITY as CityName
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
