import {render, screen} from '@testing-library/react';
import {getRandomNumber} from '../../../mocks/mocks.ts';
import {ReviewsRating} from './reviews-rating.tsx';

describe('Component: ReviewsRating', () => {
  it('should render correctly', () => {
    const expectedText = 'Rating';

    render(<ReviewsRating rating={getRandomNumber(1, 5)}/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
