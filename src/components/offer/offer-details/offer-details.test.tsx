import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {withHistory, withStore} from '../../../mocks/mock-component.tsx';
import {makeFakeOffer, makeFakeStore} from '../../../mocks/mocks.ts';
import {OfferDetails} from './offer-details.tsx';

describe('Component: OfferDetails', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const offerDetailsSectionElementTestId = 'offerDetailsSectionElement';
    const mockOffer = makeFakeOffer();
    const withHistoryComponent = withHistory(
      <OfferDetails
        offer={mockOffer}
        isPremium={false}
        isFavorite={false}
        id={mockOffer.id}
        reviews={[]}
      />,
      mockHistory
    );

    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(
      screen.getByTestId(offerDetailsSectionElementTestId)
    ).toBeInTheDocument();
  });
});
