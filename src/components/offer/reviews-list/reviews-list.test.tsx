import {render, screen} from '@testing-library/react';
import {makeFakeComment} from '../../../mocks/mocks.ts';
import {ReviewsList} from './reviews-list.tsx';

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    const mockComment = makeFakeComment();
    const mockComments = Array.from({length: 5}, () => mockComment);
    const reviewsListElementTestId = 'reviewsListElement';

    render(<ReviewsList reviews={mockComments}/>);

    expect(screen.getByTestId(reviewsListElementTestId)).toBeInTheDocument();
  });
});
