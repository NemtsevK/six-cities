import {MockStore, configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from '@reduxjs/toolkit';
import {State} from 'history';
import browserHistory from '../../browser-history.ts';
import {AppRoute} from '../../const.ts';
import {redirectToRoute} from '../action.ts';
import {redirect} from './redirect.ts';

vi.mock('../../browser-history', () => ({
  default: {
    location: {pathname: ''},
    push(path: string) {
      this.location.pathname = path;
    },
  },
}));

describe('Redirect middleware', () => {
  let store: MockStore;

  beforeAll(() => {
    const middleware = [redirect];
    const mockStoreCreator = configureMockStore<State, AnyAction>(middleware);
    store = mockStoreCreator();
  });

  beforeEach(() => {
    browserHistory.push('');
  });

  it('should redirect to "/login" with redirectToRoute action', () => {
    const redirectAction = redirectToRoute(AppRoute.Login);
    store.dispatch(redirectAction);
    expect(browserHistory.location.pathname).toBe(AppRoute.Login);
  });

  it('should not redirect to "/lose" with empty action', () => {
    const emptyAction = {type: '', payload: AppRoute.Lose};
    store.dispatch(emptyAction);
    expect(browserHistory.location.pathname).not.toBe(AppRoute.Lose);
  });
});
