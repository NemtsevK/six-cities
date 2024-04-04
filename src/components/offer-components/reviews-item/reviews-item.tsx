import dayjs from 'dayjs';
import {getRatingWidth} from '../../../utils.ts';
import {TReview} from '../../../types/review.ts';

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
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={formattedDateTime}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}
