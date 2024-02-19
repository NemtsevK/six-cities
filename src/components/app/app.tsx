import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';

type AppProps = {
  placesCount: number;
}

export function App(props: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage {...props}/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <FavoritesPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
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
