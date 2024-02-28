import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../const.ts';
import {Header} from '../../components/header/header.tsx';
import {Favorites} from '../../components/favorites/favorites.tsx';
import {Offer} from '../../types/offer.ts';

type OfferListProps = {
  offers: Offer[];
}

export function FavoritesPage({offers}: OfferListProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <Header isActive={false} isNav/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <Favorites offers={offers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
