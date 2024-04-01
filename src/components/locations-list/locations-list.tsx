import React from 'react';
import cn from 'classnames';
import {cities} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCurrentCity} from '../../store/action.ts';

export function LocationsList(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const citiesNames = Object.values(cities);

  const handleCityClick = (city: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault();
    dispatch(setCurrentCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        citiesNames.map((item) => (
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
