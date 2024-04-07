import {HelmetProvider} from 'react-helmet-async';
import {Route, Routes} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {PrivateRoute} from '../routes/private-route/private-route.tsx';
import {getOffersDataLoadingStatus} from '../../store/app-data/app-data.selectors.ts';
import {getAuthCheckedStatus, getAuthorizationStatus} from '../../store/user-process/user-process.selectors.ts';
import {AppRoute} from '../../const.ts';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {LoadingPage} from '../../pages/loading-page/loading-page.tsx';

export function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);

  if (!isAuthChecked || isOffersDataLoading) {
    return <LoadingPage/>;
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage/>}/>
        <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
      </Routes>
    </HelmetProvider>
  );
}
