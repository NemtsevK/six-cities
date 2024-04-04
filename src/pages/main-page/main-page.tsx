import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {getOffers} from '../../store/app-data/app-data.selectors';
import {getCity} from '../../store/app-process/app-process.selectors';
import {useAppSelector} from '../../hooks';
import {sortingOffers, filterOffersByCityName, pluralize} from '../../utils.ts';
import {SortingMap, cityCoordinates, citiesNames} from '../../const.ts';
import {Header} from '../../components/header/header.tsx';
import {NoOffers} from '../../components/no-offers/no-offers.tsx';
import {Tabs} from '../../components/tabs/tabs.tsx';
import {OffersList} from '../../components/offers-list/offers-list.tsx';
import {Map} from '../../components/map/map.tsx';
import {SortingOptions} from '../../components/sorting-options/sorting-options.tsx';
import {ErrorPage} from '../error-page/error-page.tsx';

export function MainPage(): JSX.Element {
  const [sortOption, setSortOption] = useState<string>(SortingMap.Popular);
  const [sortingOptionsVisible, setSortingOptionsVisible] = useState<boolean>(false);
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);

  const offers = useAppSelector(getOffers);
  const currentLocation = useAppSelector(getCity);

  if (offers.length === 0) {
    return <ErrorPage/>;
  }

  const handleSortOptionClick = () => {
    setSortingOptionsVisible(true);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
  };

  const handleOfferHover = (offerId: string) => {
    setHoveredOfferId(offerId);
  };

  const activeCityCoordinates = cityCoordinates.find(
    (city) => city.name.toLowerCase() === currentLocation.toLowerCase()
  );

  const filteredOffers = filterOffersByCityName(offers, currentLocation);

  const sortedOffers = sortingOffers(sortOption, filteredOffers);

  if (sortedOffers.length === 0) {
    return <NoOffers currentLocation={currentLocation}/>;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. {currentLocation}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={citiesNames}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedOffers.length} place{pluralize(sortedOffers.length)}{' '}
                to stay in {currentLocation}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span
                  className="places__sorting-type"
                  tabIndex={0}
                  onClick={handleSortOptionClick}
                >
                  {sortOption}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortingOptions
                  handleSort={handleSort}
                  sortingOptionsVisible={sortingOptionsVisible}
                  setSortingOptionsVisible={setSortingOptionsVisible}
                />
              </form>
              <OffersList
                offers={sortedOffers}
                onOfferHover={handleOfferHover}
                className="cities__places-list places__list tabs__content"
              />
            </section>
            <div className="cities__right-section">
              {activeCityCoordinates && sortedOffers.length > 0 && (
                <Map
                  city={activeCityCoordinates}
                  activeOfferId={hoveredOfferId}
                  offers={sortedOffers}
                  className={'cities__map'}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
