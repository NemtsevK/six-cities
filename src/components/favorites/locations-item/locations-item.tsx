import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../../hooks';
import {changeCity} from '../../../store/app-process/app-process.slice.ts';

type LocationsItemProps = {
  city: string;
};

export function LocationsItem({city}: LocationsItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleCityClick() {
    dispatch(changeCity({city}));
  }

  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item" data-testid="locationsItemElement">
        <Link className="locations__item-link" to={`/?city=${city}`}>
          <span onClick={() => handleCityClick()}>{city}</span>
        </Link>
      </div>
    </div>
  );
}
