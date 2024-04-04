import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {TOffer, TOffers} from './offer';
import {TReviews} from './review.ts';

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type TAppData = {
  offers: TOffers;
  isOffersDataLoading: boolean;
  hasError: boolean;
  isToggleFavoriteLoading: boolean;
  offer: TOffer;
  isOfferDataLoading: boolean;
  comments: TReviews;
  nearbyOffers: TOffers;
  favoriteOffers: TOffers;
  isCommentDataSending: boolean;
  hasSubmitError: boolean;
  hasOfferDataLoadingError: boolean;
};

export type TAppProcess = {
  city: string;
};

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
