import cn from 'classnames';
import {Cities} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCurrentCity} from '../../store/action';
import {CityName} from '../../types/city-name';

export function LocationsList(): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const dispatch = useAppDispatch();
  const cities = Object.values(Cities);

  const handleCityClick = (city: CityName) => (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    evt.preventDefault();
    dispatch(setCurrentCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((item) => (
          <li key={item} className="locations__item">
            <a
              className={cn(
                'locations__item-link',
                'tabs__item',
                {'tabs__item--active': item === currentCity}
              )}
              onClick={handleCityClick(item)}
            >
              <span>{item}</span>
            </a>
          </li>))
      }
    </ul>
  );
}
