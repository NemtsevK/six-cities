import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {withHistory, withStore} from '../../mocks/mock-component.tsx';
import {makeFakeStore} from '../../mocks/mocks.ts';
import {LoginPage} from './login-page.tsx';

describe('Component: LoginPage', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const testId = 'login-main-page';
    const withHistoryComponent = withHistory(<LoginPage/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
