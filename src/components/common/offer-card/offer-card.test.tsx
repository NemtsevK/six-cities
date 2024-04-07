import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {withHistory, withStore} from '../../../mocks/mock-component.tsx';
import {makeFakeOffer, makeFakeStore} from '../../../mocks/mocks.ts';
import {OfferCard} from './offer-card.tsx';

describe('Component: Card', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const cardArticleElementTestId = 'cardArticleElement';

    const withHistoryComponent = withHistory(
      <OfferCard
        offer={mockOffer}
        isActive={false}
        onOfferHover={() => {
        }}
        size="large"
        isFavoriteItem
      />,
      mockHistory
    );

    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(cardArticleElementTestId)).toBeInTheDocument();
  });
});
