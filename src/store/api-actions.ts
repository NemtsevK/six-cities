import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute} from '../const.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {TAuthData} from '../types/auth-data.ts';
import {TReview, TReviewData, TReviews} from '../types/review.ts';
import {TOffer, TOffers} from '../types/offer.ts';
import {TAppDispatch, TState} from '../types/state.ts';
import {TUser} from '../types/user.ts';
import {redirectToRoute} from './action.ts';

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, {extra: api}) => {
  await api.get(APIRoute.Login);
});

export const loginAction = createAsyncThunk<
  void,
  TAuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {
      data: {token},
    } = await api.post<TUser>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, {extra: api}) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

export const fetchOffersAction = createAsyncThunk<
  TOffers,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, {extra: api}) => {
  const {data} = await api.get<TOffers>(APIRoute.Offers);
  return data;
});

export const toggleFavoriteAction = createAsyncThunk<
  TOffer,
  { id: string | undefined; status: number },
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/toggleFavoriteOffer', async ({id, status}, {extra: api}) => {
  const {data} = await api.post<TOffer>(`/favorite/${id}/${status}`);
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  TOffer,
  string,
  { extra: AxiosInstance }
>('data/fetchOffer', async (id, {extra: api}) => {
  const {data} = await api.get<TOffer>(`/offers/${id}`);
  return data;
});

export const fetchCommentsAction = createAsyncThunk<
  TReviews,
  string,
  { extra: AxiosInstance }
>('data/fetchComments', async (id, {extra: api}) => {
  const {data} = await api.get<TReviews>(`/comments/${id}`);
  return data;
});

export const fetchNearbyOffersAction = createAsyncThunk<
  TOffers,
  string,
  { extra: AxiosInstance }
>('data/loadNearbyOffers', async (id, {extra: api}) => {
  const {data} = await api.get<TOffers>(`/offers/${id}/nearby`);
  return data;
});

export const postCommentAction = createAsyncThunk<
  TReview,
  TReviewData,
  { extra: AxiosInstance }
>('offers/postComment', async ({id, comment, rating}, {extra: api}) => {
  const {data} = await api.post<TReview>(`/comments/${id}`, {
    comment,
    rating,
  });
  return data;
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  TOffers,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteOffers', async (_arg, {extra: api}) => {
  const {data} = await api.get<TOffers>(APIRoute.Favorite);
  return data;
});

export const fetchUserDataAction = createAsyncThunk<
  TUser,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchUserData', async (_arg, { extra: api }) => {
  const { data } = await api.get<TUser>(APIRoute.Login);
  return data;
});
