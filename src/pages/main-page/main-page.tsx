import {Header} from '../../components/header/header.tsx';
import {MainOffers} from '../../components/main-offers/main-offers.tsx';
import {NoOffers} from '../../components/no-offers/no-offers.tsx';
import {LocationsList} from '../../components/locations-list/locations-list.tsx';
import {useAppSelector} from '../../hooks';

export function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
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
