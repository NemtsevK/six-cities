import {Offer} from '../../types/offer.ts';
import {MAX_NEAR_OFFERS} from '../../const.ts';

type NearOffersProp = {
  offer: Offer;
  offers: Offer[];
}

export function getNearOffers({offer, offers}: NearOffersProp): Offer[] {
  const nearOffers: Offer[] = [];

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearOffers.push(offers[i]);
    }

    if (nearOffers.length >= MAX_NEAR_OFFERS) {
      break;
    }
  }

  return nearOffers;
}
