import {Offer} from '../../types/offer.ts';
import {OfferCard} from '../offer-card/offer-card.tsx';

type NearPlacesProps = {
  nearPlaces: Offer[];
  setChosenCard: (id: string | null) => void;
}

export function NearPlaces({nearPlaces, setChosenCard}: NearPlacesProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearPlaces.map((place) => (
            <OfferCard key={place.id} block="near-places" offer={place} onCardHover={() => setChosenCard(place.id)}/>
          ))}
        </div>
      </section>
    </div>
  );
}
