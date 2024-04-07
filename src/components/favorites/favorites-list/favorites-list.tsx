import {FavoritesItem} from '../favorites-item/favorites-item.tsx';

export function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list" data-testid="favoritesListElement">
      <FavoritesItem />
    </ul>
  );
}
