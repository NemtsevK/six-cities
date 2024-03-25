import {Offer, Offers} from '../../types/offer.ts';
import {MAX_NEAR_OFFERS} from '../../const.ts';

type NearbyOffersProp = {
  offer: Offer;
  offers: Offers;
}

export function getNearbyOffers({offer, offers}: NearbyOffersProp): Offers {
  const nearbyOffers: Offers = [];

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearbyOffers.push(offers[i]);
    }

    if (nearbyOffers.length >= MAX_NEAR_OFFERS) {
      break;
    }
  }

  return nearbyOffers;
}
