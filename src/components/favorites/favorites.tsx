import {OfferCard} from '../offer-card/offer-card.tsx';
import {LocationsItem} from '../locations-items/locations-items.tsx';
import {Offers} from '../../types/offer.ts';

type OfferListProps = {
  offers: Offers;
}

//сгруппировать любимые предложения по городам
function getFavoritesByLocation(items: Offers) {
  return items.reduce<{ [key: string]: Offers }>((result, current) => {
    const location = current.city.name;
    if (!(location in result)) {
      result[location] = [];
    }
    result[location].push(current);

    return result;
  }, {});
}

export function Favorites({offers}: OfferListProps): JSX.Element {
  const favorites = offers.filter((item) => item.isFavorite);
  const favoritesByLocation = getFavoritesByLocation(favorites);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesByLocation).map(
        ([city, groupedFavorites]) => (
          <li className="favorites__locations-items" key={city}>
            <LocationsItem city={city} />
            <div className="favorites__places">
              {groupedFavorites.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  isFavoriteItem
                  size="small"
                />
              ))}
            </div>
          </li>
        )
      )}
    </ul>
  );
}
