import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, CITIES} from '../../const.ts';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {Offer} from '../../types/offer.ts';
import {reviews} from '../../mocks/reviews.ts';

type AppProps = {
  offers: Offer[];
}

export function App({offers}: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage offers={offers} locations={CITIES}/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.Auth}
          >
            <FavoritesPage offers={offers}/>
          </PrivateRoute>
        }
      />
      <Route
        path={`${AppRoute.Offer}/:offerId`}
        element={<OfferPage offers={offers} reviews={reviews}/>}
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
