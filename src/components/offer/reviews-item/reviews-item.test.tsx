import {render, screen} from '@testing-library/react';
import {makeFakeComment} from '../../../mocks/mocks.ts';
import {ReviewsItem} from './reviews-item.tsx';

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const reviewsItemElementTestId = 'reviewsItemElement';
    const mockComment = makeFakeComment();

    render(<ReviewsItem review={mockComment}/>);

    expect(screen.getByTestId(reviewsItemElementTestId)).toBeInTheDocument();
  });
});
