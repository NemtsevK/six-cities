import {v4 as uuidv4} from 'uuid';
import {TReview, TReviews} from '../../../types/review.ts';
import {ReviewsItem} from '../reviews-item/reviews-item.tsx';

type ReviewsListProps = {
  reviews: TReviews;
}

export function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  if (reviews.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <ul className="reviews__list">
      {reviews.map((review: TReview) => (
        <ReviewsItem key={uuidv4()} review={review}/>
      ))}
    </ul>
  );
}
