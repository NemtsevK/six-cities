import {OfferCard} from '../offer-card/offer-card.tsx';
import {Offer} from '../../types/offer.ts';

type OfferListProps = {
  offers: Offer[];
}

//сгруппировать любимые предложения по городам
function getFavoritesByLocation(items: Offer[]) {
  return items.reduce<{ [key: string]: Offer[] }>((result, current) => {
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
        ([location, groupedFavorites]) => (
          <li className="favorites__locations-items" key={location}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{location}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {groupedFavorites.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  block="favorites"
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
