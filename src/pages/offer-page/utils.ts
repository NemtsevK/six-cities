import {TOffer, TOffers} from '../../types/offer.ts';
import {MAX_NEAR_OFFERS_COUNT} from '../../const.ts';

type NearbyOffersProp = {
  offer: TOffer;
  offers: TOffers;
}

export function getNearbyOffers({offer, offers}: NearbyOffersProp): TOffers {
  const nearbyOffers: TOffers = [];

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearbyOffers.push(offers[i]);
    }

    if (nearbyOffers.length >= MAX_NEAR_OFFERS_COUNT) {
      break;
    }
  }

  return nearbyOffers;
}
