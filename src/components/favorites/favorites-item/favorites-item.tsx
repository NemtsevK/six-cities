import {useAppSelector} from '../../../hooks';
import {getFavoriteOffers} from '../../../store/app-data/app-data.selectors.ts';
import {filterOffersByCityName} from '../../../utils.ts';
import {OfferCard} from '../../common/offer-card/offer-card.tsx';
import {LocationsItem} from '../locations-item/locations-item.tsx';

export function FavoritesItem(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoritesCitiesSet = new Set<string>();
  favoriteOffers.forEach((offer) => {
    favoritesCitiesSet.add(offer.city.name);
  });
  const favoritesCities = Array.from(favoritesCitiesSet);

  return (
    <>
      {favoritesCities.map((city) => (
        <li className="favorites__locations-items" key={city} data-testid="favoritesItemElement">
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
    </>
  );
}
