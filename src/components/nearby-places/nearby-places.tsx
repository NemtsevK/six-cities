import {Offers} from '../../types/offer.ts';
import {OfferCard} from '../offer-card/offer-card.tsx';

type NearbyPlacesProps = {
  nearbyPlaces: Offers;
  setChosenCard: (id: string | null) => void;
}

export function NearbyPlaces({nearbyPlaces, setChosenCard}: NearbyPlacesProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearbyPlaces.map((place) => (
            <OfferCard key={place.id} block="near-places" offer={place} onCardHover={() => setChosenCard(place.id)}/>
          ))}
        </div>
      </section>
    </div>
  );
}
