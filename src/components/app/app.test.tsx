import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {AppRoute, AuthorizationStatus, DEFAULT_STATE} from '../../const.ts';
import {withHistory, withStore} from '../../mocks/mock-component.tsx';
import {getRandomNumber, makeFakeOffer, makeFakeStore} from '../../mocks/mocks.ts';
import {App} from './app.tsx';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText(/Places/i)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    const loginTitleElementTestId = 'loginTitleElement';
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    const signInTitle = screen.getByTestId(loginTitleElementTestId);
    expect(signInTitle).toHaveTextContent(/Sign in/i);
  });

  it('should render "FavoritesPage" when user navigate to "/favorites"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore({
        DATA: {
          ...DEFAULT_STATE.DATA,
          favoriteOffers: Array.from({length: getRandomNumber(1, 5)}, () =>
            makeFakeOffer()
          ),
        },
        USER: {
          authorizationStatus: AuthorizationStatus.Auth,
        },
      })
    );
    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "OfferPage" when user navigate to "/offer/:id"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.Offer);

    render(withStoreComponent);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
