import { render, screen } from '@testing-library/react';
import { citiesNames } from '../../const.ts';
import { getRandomCityName } from '../../utils.ts';
import {ErrorStatus} from './error-status.tsx';

describe('Component: ErrorStatus', () => {
  it('should render correctly', () => {
    const expectedText = 'No places to stay available';
    const mockCityName = getRandomCityName(citiesNames);

    render(<ErrorStatus currentLocation={mockCityName} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
