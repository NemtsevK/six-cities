import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import { withHistory } from '../../../mocks/mock-component.tsx';
import {HeaderNavItemUser} from './header-nav-item-user.tsx';

describe('Component: HeaderNavItemUser', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const navAuthUserElementTestId = 'navAuthUserElement';
    const withHistoryComponent = withHistory(
      <HeaderNavItemUser
        userData={{email: '', avatarUrl: ''}}
        favoriteOffersCount={0}
      />,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByTestId(navAuthUserElementTestId)).toBeInTheDocument();
  });
});
