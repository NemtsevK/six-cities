import {useState} from 'react';
import {OfferCard} from '../../offer-card/offer-card.tsx';
import {Offer, Offers} from '../../../types/offer.ts';
import {CityName} from '../../../types/city-name.ts';
import {TSorting} from '../../../types/sorting.ts';
import {Sorting} from '../../sorting/sorting.tsx';
import {SortingMap} from '../../../const.ts';
import {sorting} from '../../../utils.ts';


type OfferListProps = {
  currentLocation: CityName;
  currentOffers: Offers;
  onCardHover: (offerId: Offer['id'] | null) => void;
}

export function MainOffersList({currentLocation, currentOffers, onCardHover}: OfferListProps): JSX.Element {
  const [activeSorting, setActiveSorting] = useState<TSorting>(SortingMap.Popular);

  function handleSortingChange(option: TSorting) {
    setActiveSorting(option);
  }

  const sortedOffers = sorting[activeSorting](currentOffers);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{currentOffers.length} places to stay in {currentLocation}</b>
      <Sorting activeSorting={activeSorting} onSortingOptionClick={handleSortingChange}/>
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            block="cities"
            onCardHover={onCardHover}
          />
        ))}
      </div>
    </section>
  );
}
