import dayjs from 'dayjs';
import {TReview} from '../../../types/review.ts';
import {ReviewsAvatar} from '../reviews-avatar/reviews-avatar.tsx';
import {ReviewsRating} from '../reviews-rating/reviews-rating.tsx';

type ReviewItemProps = {
  review: TReview;
}

export function ReviewsItem({review}: ReviewItemProps): JSX.Element {
  const {user, rating, comment, date} = review;
  const reviewDate = dayjs(date);
  const formattedDate = reviewDate.format('MMMM YYYY');
  const formattedDateTime = reviewDate.format('YYYY-MM-DD');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <ReviewsAvatar user={user}/>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <ReviewsRating rating={rating}/>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={formattedDateTime}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}
