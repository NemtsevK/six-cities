import {render, screen} from '@testing-library/react';
import {makeFakeOffer} from '../../../mocks/mocks.ts';
import {OfferFeatures} from './offer-features.tsx';

describe('Component: OfferFeatures', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const {type, bedrooms, maxAdults} = mockOffer;

    render(
      <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
    );

    expect(screen.getByText(type)).toBeInTheDocument();
  });
});
