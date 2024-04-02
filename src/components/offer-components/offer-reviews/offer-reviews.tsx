import {AuthorizationStatus, MAX_OFFER_SCREEN_COMMENTS_COUNT} from '../../../const';
import {useAppSelector} from '../../../hooks';
import {getAuthorizationStatus} from '../../../store/user-process/user-process.selectors';
import {TReviews} from '../../../types/review.ts';
import {ReviewsForm} from '../reviews-form/reviews-form.tsx';
import {ReviewsList} from '../reviews-list/reviews-list.tsx';

type OfferReviewsProps = {
  reviews: TReviews;
};

export function OfferReviews({reviews}: OfferReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  let sortedReviews = [...reviews];

  sortedReviews = sortedReviews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_OFFER_SCREEN_COMMENTS_COUNT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      {reviews && <ReviewsList reviews={sortedReviews}/>}
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm/>}
    </section>
  );
}
