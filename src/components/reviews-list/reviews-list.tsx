import {v4 as uuidv4} from 'uuid';
import {Review, Reviews} from '../../types/review.ts';
import {ReviewsItem} from './reviews-item/reviews-item.tsx';

type ReviewsListProps = {
  reviews: Reviews;
}

export function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  if (reviews.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <ul className="reviews__list">
      {reviews.map((review: Review) => (
        <ReviewsItem key={uuidv4()} review={review}/>
      ))}
    </ul>
  );
}
