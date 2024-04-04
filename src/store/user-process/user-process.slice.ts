import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const.ts';
import {TUserProcess} from '../../types/state.ts';
import {TUser} from '../../types/user.ts';
import {checkAuthAction, loginAction, logoutAction, fetchUserDataAction} from '../api-actions.ts';

const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as TUser,
  isUserDataLoading: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchUserDataAction.rejected, (state) => {
        state.isUserDataLoading = false;
      });
  },
});
