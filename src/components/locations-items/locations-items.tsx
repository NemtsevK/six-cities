import {Link} from 'react-router-dom';
import {setCurrentCity} from '../../store/action.ts';
import {store} from '../../store';

type LocationsItemProps = {
  city: string;
};

function handleCityClick(city: string) {
  store.dispatch(setCurrentCity(city));
}

export function LocationsItem({city}: LocationsItemProps): JSX.Element {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={`/?city=${city}`}>
          <span onClick={() => handleCityClick(city)}>{city}</span>
        </Link>
      </div>
    </div>
  );
}
