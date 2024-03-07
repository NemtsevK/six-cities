import {SyntheticEvent, useState} from 'react';
import {AppRoute, DEFAULT_CITY} from '../../const.ts';
import {Header} from '../../components/header/header.tsx';
import {MainOffers} from '../../components/main-offers/main-offers.tsx';
import {NoOffers} from '../../components/no-offers/no-offers.tsx';
import {Offer} from '../../types/offer.ts';
import {City} from '../../types/city.ts';


type MainPageProps = {
  offers: Offer[];
  locations: City[];
}

export function MainPage({offers, locations}: MainPageProps): JSX.Element {
  const [currentLocation, setCurrentLocation] = useState(DEFAULT_CITY);
  const currentOffers = offers.filter((offer) => offer.city.name === currentLocation.name);
  const isActive = (item: City) => item.name === currentLocation.name ? 'tabs__item--active' : '';

  return (
    <div className="page page--gray page--main">
      <Header isActive isNav/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                locations.map((item) => (
                  <li key={item.name} className="locations__item">
                    <a
                      className={`locations__item-link tabs__item ${isActive(item)}`}
                      href={AppRoute.Main}
                      onClick={(event: SyntheticEvent) => {
                        event.preventDefault();
                        setCurrentLocation(item);
                      }}
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>))
              }
            </ul>
          </section>
        </div>
        <div className="cities">
          {
            currentOffers.length > 0
              ? <MainOffers currentLocation={currentLocation} currentOffers={currentOffers}/>
              : <NoOffers currentLocation={currentLocation}/>
          }
        </div>
      </main>
    </div>
  );
}
