import {useAppSelector} from '../../../hooks';
import {getFavoriteOffers} from '../../../store/app-data/app-data.selectors';
import {filterOffersByCityName} from '../../../utils.ts';
import {OfferCard} from '../../common/offer-card/offer-card.tsx';
import {LocationsItem} from '../locations-items/locations-items.tsx';

export function FavoritesList(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoritesCitiesSet = new Set<string>();
  favoriteOffers.forEach((offer) => {
    favoritesCitiesSet.add(offer.city.name);
  });
  const favoritesCities = Array.from(favoritesCitiesSet);

  return (
    <ul className="favorites__list">
      {favoritesCities.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <LocationsItem city={city}/>
          <div className="favorites__places">
            {filterOffersByCityName(favoriteOffers, city).map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                isFavoriteItem
                size="small"
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
