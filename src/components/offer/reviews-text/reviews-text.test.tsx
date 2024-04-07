import {render, screen} from '@testing-library/react';
import {makeFakeComment} from '../../../mocks/mocks.ts';
import {ReviewsText} from './reviews-text.tsx';

describe('Component: ReviewsText', () => {
  it('should render correctly', () => {
    const reviewsTextElementTestId = 'reviewsTextElement';
    const mockComment = makeFakeComment();

    render(<ReviewsText review={mockComment}/>);

    expect(screen.getByTestId(reviewsTextElementTestId)).toBeInTheDocument();
  });
});

