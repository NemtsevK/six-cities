import {render, screen} from '@testing-library/react';
import {getRandomNumber, makeFakeOffer} from '../../../mocks/mocks.ts';
import {Map} from './map.tsx';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const mockOffers = Array.from({length: getRandomNumber(0, 5)}, () =>
      makeFakeOffer()
    );
    const mapSectionElementTestId = 'mapSectionElement';

    render(
      <Map
        city={undefined}
        activeOfferId={null}
        offers={mockOffers}
        className={''}
      />
    );

    expect(screen.getByTestId(mapSectionElementTestId)).toBeInTheDocument();
  });
});
