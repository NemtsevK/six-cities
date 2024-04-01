import {Route, Routes} from 'react-router-dom';
import {browserHistory} from '../../browser-history';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {Spinner} from '../spinner/spinner.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {HistoryRouter} from '../history-route/history-route';
import {useAppSelector} from '../../hooks';

export function App(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return <Spinner/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage/>}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
      </Routes>
    </HistoryRouter>
  );
}
