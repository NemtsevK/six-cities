import { render, screen } from '@testing-library/react';
import {MapSection} from './map-section.tsx';

describe('Component: MapSection', () => {
  it('should render correctly', () => {
    const mapSectionElementTestId = 'mapSectionElement';

    render(
      <MapSection city={undefined} activeOfferId={null} offers={[]} />
    );

    expect(screen.getByTestId(mapSectionElementTestId)).toBeInTheDocument();
  });
});
