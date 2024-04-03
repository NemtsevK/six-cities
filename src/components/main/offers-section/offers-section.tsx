import {SortingMap, cityCoordinates} from '../../../const.ts';
import {TOffer} from '../../../types/offer.ts';
import {pluralize} from '../../../utils.ts';
import {Map} from '../../common/map/map.tsx';
import {OffersList} from '../offers-list/offers-list';
import {PlacesSorting} from '../places-sorting/places-sorting.tsx';

type OffersSectionProps = {
  currentLocation: string;
  filteredOffers: TOffer[];
  hoveredOfferId: string | null | undefined;
  handleOfferHover: (offerId: string) => void;
  sortingOptionsVisible: boolean;
  handleSortOptionClick: () => void;
  handleSort: (sortOption: SortingMap) => void;
  sortOption: string;
  setSortingOptionsVisible: (visible: boolean) => void;
};

export function OffersSection({
  currentLocation,
  filteredOffers,
  hoveredOfferId,
  handleOfferHover,
  sortingOptionsVisible,
  handleSortOptionClick,
  handleSort,
  sortOption,
  setSortingOptionsVisible,
}: OffersSectionProps): JSX.Element {
  const activeCityCoordinates = cityCoordinates.find(
    (city) => city.name.toLowerCase() === currentLocation.toLowerCase()
  );

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {filteredOffers.length} place{pluralize(filteredOffers.length)} to
            stay in {currentLocation}
          </b>
          <PlacesSorting
            handleSortOptionClick={handleSortOptionClick}
            sortOption={sortOption}
            handleSort={handleSort}
            sortingOptionsVisible={sortingOptionsVisible}
            setSortingOptionsVisible={setSortingOptionsVisible}
          />
          <OffersList
            offers={filteredOffers}
            onOfferHover={handleOfferHover}
            className="cities__places-list places__list tabs__content"
          />
        </section>
        <div className="cities__right-section">
          {activeCityCoordinates && filteredOffers.length > 0 && (
            <Map
              city={activeCityCoordinates}
              activeOfferId={hoveredOfferId}
              offers={filteredOffers}
              className={'cities'}
            />
          )}
        </div>
      </div>
    </div>
  );
}
