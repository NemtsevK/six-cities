import {Map} from '../../common/map/map';
import {TOffers} from '../../../types/offer.ts';
import {TCity} from '../../../types/city.ts';

type MapSectionProps = {
  city: TCity | undefined;
  activeOfferId: string | null | undefined;
  offers: TOffers;
};

export function MapSection({city, activeOfferId, offers}: MapSectionProps): JSX.Element {
  return (
    <Map
      city={city}
      activeOfferId={activeOfferId}
      offers={offers}
      className={'offer'}
    />
  );
}
