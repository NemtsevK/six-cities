import {render, screen} from '@testing-library/react';
import {makeFakeOffer} from '../../../mocks/mocks.ts';
import {OfferHost} from './offer-host.tsx';

describe('Component: OfferHost', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const {host, description} = mockOffer;
    const expectedText = 'Meet the host';

    render(
      <OfferHost isAvatarPro={''} host={host} description={description}/>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
