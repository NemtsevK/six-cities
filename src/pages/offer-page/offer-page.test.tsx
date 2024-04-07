import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {withHistory, withStore} from '../../mocks/mock-component.tsx';
import {makeFakeStore} from '../../mocks/mocks.ts';
import {OfferPage} from './offer-page.tsx';

describe('Component: OfferPage', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const offerMainElementTestId = 'offerMainElement';

    const withHistoryComponent = withHistory(<OfferPage/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(offerMainElementTestId)).toBeInTheDocument();
  });
});
