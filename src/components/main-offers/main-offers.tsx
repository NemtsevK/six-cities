import {useState} from 'react';
import {Map} from '../map/map.tsx';
import {Offer} from '../../types/offer.ts';
import {MainOffersList} from './main-offers-list/main-offers-list.tsx';
import {Cities} from '../../const';

type OfferListProps = {
  currentLocation: keyof typeof Cities;
  currentOffers: Offer[];
}

export function MainOffers({currentLocation, currentOffers}: OfferListProps): JSX.Element {
  const [activeOfferId, setHoveredOfferId] = useState<Offer['id'] | null>(null);
  const locationForMap = currentOffers[0].city;

  function handleCardHover(offerId: Offer['id'] | null) {
    setHoveredOfferId(offerId);
  }

  return (
    <div className="cities__places-container container">
      <MainOffersList
        currentLocation={currentLocation}
        currentOffers={currentOffers}
        onCardHover={handleCardHover}
      />
      <div className="cities__right-section">
        <Map
          city={locationForMap}
          offers={currentOffers}
          activeOfferId={activeOfferId}
          className={'cities__map'}
        />
      </div>
    </div>
  );
}
