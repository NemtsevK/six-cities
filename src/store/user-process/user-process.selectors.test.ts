import {AuthorizationStatus, NameSpace} from '../../const.ts';
import {TState} from '../../types/state.ts';
import {makeFakeUser} from '../../mocks/mocks.ts';
import {getAuthCheckedStatus, getAuthorizationStatus, getUserData} from './user-process.selectors';

describe('UserProcess selectors', () => {
  const mockUser = makeFakeUser();
  const mockState = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: mockUser,
    },
  };
  describe('getAuthorizationStatus', () => {
    it('should return correct authorization status', () => {
      const {authorizationStatus} = mockState[NameSpace.User];
      const result = getAuthorizationStatus(
        mockState as Pick<TState, NameSpace.User>
      );
      expect(result).toBe(authorizationStatus);
    });
  });

  describe('getAuthCheckedStatus', () => {
    it('should return false when user authorization status is not unknown', () => {
      mockState[NameSpace.User].authorizationStatus =
        AuthorizationStatus.Unknown;
      const result = getAuthCheckedStatus(
        mockState as Pick<TState, NameSpace.User>
      );
      expect(result).toBe(false);
    });
  });

  describe('getUserData', () => {
    it('should return correct UserData', () => {
      const expectedUserData = mockUser;
      expect(getUserData(mockState as Pick<TState, NameSpace.User>)).toEqual(
        expectedUserData
      );
    });

    it('test_getUserData_returnsUndefined', () => {
      mockState[NameSpace.User] = {} as TState[NameSpace.User];
      expect(
        getUserData(mockState as Pick<TState, NameSpace.User>)
      ).toBeUndefined();
    });
  });
});
