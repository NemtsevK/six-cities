import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {withHistory} from '../../mocks/mock-component.tsx';
import {NotFoundPage} from './not-found-page.tsx';

describe('Component: NotFoundPage', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const expectedText = '404 Not Found';
    const withHistoryComponent = withHistory(<NotFoundPage/>, mockHistory);

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
