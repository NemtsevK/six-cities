import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {withHistory} from '../../../mocks/mock-component.tsx';
import {UnauthenticatedUser} from './unauthenticated-user.tsx';

describe('Component: UnauthenticatedUser', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const navNoAuthUserElementTestId = 'navNoAuthUserElement';
    const withHistoryComponent = withHistory(
      <UnauthenticatedUser/>,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByTestId(navNoAuthUserElementTestId)).toBeInTheDocument();
  });
});
