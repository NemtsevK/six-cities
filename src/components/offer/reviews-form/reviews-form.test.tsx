import {render, screen} from '@testing-library/react';
import {withStore} from '../../../mocks/mock-component.tsx';
import {makeFakeStore} from '../../../mocks/mocks.ts';
import {ReviewsForm} from './reviews-form.tsx';

describe('Component: ReviewsForm', () => {
  it('should render correctly', () => {
    const expectedText = 'Your review';

    const {withStoreComponent} = withStore(<ReviewsForm/>, makeFakeStore());
    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
