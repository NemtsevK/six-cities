import {store} from '../store';
import {AuthorizationStatus} from '../const.ts';
import {TOffer, TOffers} from './offer.ts';
import {TReviews} from './review.ts';
import {TUser} from './user.ts';

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
  isUserDataLoading: boolean;
  userData: TUser;
};

export type TAppProcess = {
  city: string;
};

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
