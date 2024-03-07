import {Review} from '../../types/review.ts';
import {ReviewsItem} from './reviews-item/reviews-item.tsx';

type ReviewsListProps = {
  reviews: Review[];
}

export function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item: Review) => <ReviewsItem key={item.id} {...item}/>)}
      </ul>
    </>
  );
}
