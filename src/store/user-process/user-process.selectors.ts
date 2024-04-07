import {AuthorizationStatus, NameSpace} from '../../const.ts';
import {TState} from '../../types/state.ts';

export const getAuthorizationStatus = (
  state: Pick<TState, NameSpace.User>
): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (
  state: Pick<TState, NameSpace.User>
): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
