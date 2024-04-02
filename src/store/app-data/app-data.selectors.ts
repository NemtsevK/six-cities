import {NameSpace} from '../../const.ts';
import {TState} from '../../types/state.ts';
import {TOffer, TOffers} from '../../types/offer.ts';
import {TReviews} from '../../types/review.ts';

export const getOffers = (state: TState): TOffers => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: TState): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getErrorStatus = (state: TState): boolean => state[NameSpace.Data].hasError;
export const getOffer = (state: TState): TOffer => state[NameSpace.Data].offer;
export const getOfferDataLoadingStatus = (state: TState): boolean => state[NameSpace.Data].isOfferDataLoading;
export const getComments = (state: TState): TReviews => state[NameSpace.Data].comments;
export const getNearbyOffers = (state: TState): TOffers => state[NameSpace.Data].nearbyOffers;
export const getFavoriteOffers = (state: TState): TOffers => state[NameSpace.Data].favoriteOffers;
export const getCommentDataSendingStatus = (state: TState): boolean => state[NameSpace.Data].isCommentDataSending;
export const getSubmitErrorStatus = (state: TState): boolean => state[NameSpace.Data].hasSubmitError;
export const getErrorOfferLoadingStatus = (state: TState): boolean => state[NameSpace.Data].hasOfferDataLoadingError;
