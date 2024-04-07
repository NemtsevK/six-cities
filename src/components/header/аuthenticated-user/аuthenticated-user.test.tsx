import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {withHistory} from '../../../mocks/mock-component.tsx';
import {AuthenticatedUser} from './аuthenticated-user.tsx';

describe('Component: AuthenticatedUser', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const navAuthUserElementTestId = 'navAuthUserElement';

    const withHistoryComponent = withHistory(
      <AuthenticatedUser
        userData={{email: '', avatarUrl: ''}}
        onLogout={() => {}}
        favoriteOffersCount={0}
      />,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByTestId(navAuthUserElementTestId)).toBeInTheDocument();
  });
});
