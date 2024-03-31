import {Offers} from '../../types/offer.ts';
import {OffersList} from '../offers-list/offers-list.tsx';

type NearbyPlacesProps = {
  slicedNearbyOffers: Offers;
}

export function NearbyPlaces({slicedNearbyOffers}: NearbyPlacesProps): JSX.Element {
  if (slicedNearbyOffers.length === 0) {
    return (
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighborhood not found, sorry
        </h2>
      </section>
    );
  }

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <OffersList
        offers={slicedNearbyOffers}
        className="near-places__list places__list"
      />
    </section>
  );
}
