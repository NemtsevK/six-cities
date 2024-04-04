import {AuthorizationStatus, NameSpace} from '../../const.ts';
import {TState} from '../../types/state.ts';
import {TUser} from '../../types/user.ts';

export const getAuthorizationStatus = (
  state: Pick<TState, NameSpace.User>
): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (
  state: Pick<TState, NameSpace.User>
): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getUserData = (state: TState): TUser => state[NameSpace.User].userData;
