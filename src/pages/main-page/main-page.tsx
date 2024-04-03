import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {getOffers} from '../../store/app-data/app-data.selectors.ts';
import {getCity} from '../../store/app-process/app-process.selectors.ts';
import {useAppSelector} from '../../hooks';
import {sortingOffers, filterOffersByCityName} from '../../utils.ts';
import {SortingMap, citiesNames} from '../../const.ts';
import {Header} from '../../components/header/header.tsx';
import {MemoizedTabs} from '../../components/common/tabs/tabs.tsx';
import {OffersSection} from '../../components/main/offers-section/offers-section.tsx';
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

  const filteredOffers = filterOffersByCityName(offers, currentLocation);

  const sortedOffers = sortingOffers(sortOption, filteredOffers);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. {currentLocation}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <MemoizedTabs cities={citiesNames}/>
        <OffersSection
          currentLocation={currentLocation}
          filteredOffers={sortedOffers}
          hoveredOfferId={hoveredOfferId}
          handleOfferHover={handleOfferHover}
          sortingOptionsVisible={sortingOptionsVisible}
          setSortingOptionsVisible={setSortingOptionsVisible}
          handleSortOptionClick={handleSortOptionClick}
          handleSort={handleSort}
          sortOption={sortOption}
        />
      </main>
    </div>
  );
}
