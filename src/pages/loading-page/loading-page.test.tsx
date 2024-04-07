import {render, screen} from '@testing-library/react';
import {LoadingPage} from './loading-page.tsx';

describe('Component: LoadingPage', () => {
  it('should render correctly', () => {
    const expectedText = new RegExp(/Loading/i);

    render(<LoadingPage/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
