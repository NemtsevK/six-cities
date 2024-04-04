import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const.ts';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getCity} from '../../../store/app-process/app-process.selectors.ts';
import {changeCity} from '../../../store/app-process/app-process.slice.ts';

type TabsProps = {
  cities: string[];
};

export function Tabs({cities}: TabsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentLocation = useAppSelector(getCity);

  const handleCityClick = (city: string) => {
    dispatch(changeCity({city}));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <Link
                className={`locations__item-link tabs__item ${currentLocation === city ? 'tabs__item--active' : ''}`}
                to={AppRoute.Main}
                onClick={() => handleCityClick(city)}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const MemoizedTabs = memo(Tabs);
