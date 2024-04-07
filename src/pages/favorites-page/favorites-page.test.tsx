import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {withHistory, withStore} from '../../mocks/mock-component.tsx';
import {makeFakeStore} from '../../mocks/mocks.ts';
import {FavoritesPage} from './favorites-page.tsx';

describe('Component: FavoritesPage', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const testId = 'favorites-page';

    const withHistoryComponent = withHistory(<FavoritesPage/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
