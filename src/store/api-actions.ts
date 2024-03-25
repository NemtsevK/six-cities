import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AuthData} from '../types/auth-data.ts';
import {Offer, Offers} from '../types/offer.ts';
import {AppDispatch, State} from '../types/state';
import {User} from '../types/user.ts';
import {Review, Reviews} from '../types/review.ts';

import {
  loadComments,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setCommentsDataLoadingStatus,
  setFavoriteOffersDataLoadingStatus,
  setNearbyOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, {dispatch, extra: api}) => {
  dispatch(setOffersDataLoadingStatus(true));
  const {data} = await api.get<Offers>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, {dispatch, extra: api}) => {
  dispatch(setOfferDataLoadingStatus(true));
  const {data} = await api.get<Offer>(`/offers/${id}`);
  dispatch(loadOffer(data));
  dispatch(setOfferDataLoadingStatus(false));
});

export const fetchCommentsAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadComments', async (id, {dispatch, extra: api}) => {
  dispatch(setCommentsDataLoadingStatus(true));
  const {data} = await api.get<Reviews>(`/comments/${id}`);
  dispatch(loadComments(data));
  dispatch(setCommentsDataLoadingStatus(false));
});

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadNearbyOffers', async (id, {dispatch, extra: api}) => {
  dispatch(setNearbyOffersDataLoadingStatus(true));
  const {data} = await api.get<Offers>(`/offers/${id}/nearby`);
  dispatch(loadNearbyOffers(data));
  dispatch(setNearbyOffersDataLoadingStatus(false));
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteOffers', async (_arg, {dispatch, extra: api}) => {
  dispatch(setFavoriteOffersDataLoadingStatus(true));
  const {data} = await api.get<Offers>(APIRoute.Favorite);
  dispatch(setFavoriteOffersDataLoadingStatus(false));
  dispatch(loadFavoriteOffers(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, {dispatch, extra: api}) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {
      data: {token},
    } = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, {dispatch, extra: api}) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const toggleFavoriteAction = createAsyncThunk<
  void,
  { id: string | undefined; status: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'app/toggleFavoriteOffer',
  async ({id, status}, {dispatch, extra: api}) => {
    await api.post<Offer>(`/favorite/${id}/${status}`, {
      id,
      status,
    });
    await dispatch(fetchOfferAction(id));
    await dispatch(fetchFavoriteOffersAction());
    await dispatch(fetchOffersAction());
  }
);

export const postCommentAction = createAsyncThunk<
  void,
  Review,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/postComment', async ({id, comment, rating}, {extra: api}) => {
  await api.post<Comment>(`/comments/${id}`, {
    comment,
    rating,
  });
});

export const postCommentAndUpdateOffersAction =
  (comment: Review) => async (dispatch: AppDispatch) => {
    await dispatch(postCommentAction(comment));
    await dispatch(fetchCommentsAction(comment.id));
  };
