import {TReview} from '../../../types/review.ts';

type ReviewsTextProps = {
  review: TReview;
};

export function ReviewsText({review}: ReviewsTextProps): JSX.Element {
  return (
    <p className="reviews__text" data-testid="reviewsTextElement">
      {review.comment}
    </p>
  );
}
