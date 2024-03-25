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
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item: Review) => <ReviewsItem key={item.id} {...item}/>)}
      </ul>
    </>
  );
}
