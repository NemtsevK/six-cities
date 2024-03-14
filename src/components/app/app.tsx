import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {Spinner} from '../spinner/spinner.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
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
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.Auth}
          >
            <FavoritesPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={`${AppRoute.Offer}/:offerId`}
        element={<OfferPage/>}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage/>}
      />
      <Route
        path="*"
        element={<NotFoundPage/>}
      />
    </Routes>
  );
}
