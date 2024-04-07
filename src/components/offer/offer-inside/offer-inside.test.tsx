import {render, screen} from '@testing-library/react';
import {makeFakeOffer} from '../../../mocks/mocks.ts';
import {OfferInside} from './offer-inside.tsx';

describe('Component: OfferInside', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const {goods} = mockOffer;
    const expectedText = new RegExp(/What['’]s\s+inside/i);

    render(<OfferInside goods={goods}/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
