import {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {mockOffers} from '../../mocks/offers.ts';
import {reviews} from '../../mocks/reviews.ts';
import {setOffers} from '../../store/action.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    dispatch(setOffers(mockOffers));
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage offers={offers}/>}
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
