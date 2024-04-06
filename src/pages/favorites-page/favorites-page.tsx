import {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoriteOffersAction} from '../../store/api-actions.ts';
import { getFavoriteOffers } from '../../store/app-data/app-data.selectors.ts';
import {Header} from '../../components/header/header.tsx';
import {Footer} from '../../components/footer/footer.tsx';
import {FavoritesMain} from '../../components/favorites/favorites-main/favorites-main.tsx';
import {FavoritesEmpty} from '../../components/favorites/favorites-empty/favorites-empty.tsx';

export function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchFavoriteOffersAction());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoritesEmptyClass = favoriteOffers.length === 0 ? 'page--favorites-empty' : '';

  return (
    <div className={`page ${favoritesEmptyClass}`}>
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <Header/>
      {favoriteOffers.length === 0 ? <FavoritesEmpty/> : <FavoritesMain/>}
      <Footer/>
    </div>
  );
}
