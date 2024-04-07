import {render, screen} from '@testing-library/react';
import {getRandomNumber} from '../../../mocks/mocks.ts';
import {OfferPrice} from './offer-price.tsx';

describe('Component: OfferPrice', () => {
  it('should render correctly', () => {
    const expectedText = 'night';

    render(<OfferPrice price={getRandomNumber(1, 1000)}/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
