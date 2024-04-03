import {getRatingWidth} from '../../../utils.ts';

type ReviewsRatingProps = {
  rating: number;
};

export function ReviewsRating({rating}: ReviewsRatingProps): JSX.Element {
  return (
    <div className="reviews__rating rating">
      <div className="reviews__stars rating__stars">
        <span style={{width: getRatingWidth(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
