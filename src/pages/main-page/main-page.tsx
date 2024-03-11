import {Header} from '../../components/header/header.tsx';
import {MainOffers} from '../../components/main-offers/main-offers.tsx';
import {NoOffers} from '../../components/no-offers/no-offers.tsx';
import {LocationsList} from '../../components/locations-list/locations-list.tsx';
import {Offer} from '../../types/offer.ts';
import {useAppSelector} from '../../hooks';

type MainPageProps = {
  offers: Offer[];
}

export function MainPage({offers}: MainPageProps): JSX.Element {
  const currentLocation = useAppSelector((state) => state.currentCity);
  const currentOffers = offers.filter((offer) => offer.city.name === currentLocation);

  return (
    <div className="page page--gray page--main">
      <Header isActive isNav/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
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
