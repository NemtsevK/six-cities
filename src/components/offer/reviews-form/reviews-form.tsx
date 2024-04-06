import React, {FormEvent, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {postCommentAction} from '../../../store/api-actions.ts';
import {getCommentDataSendingStatus, getSubmitErrorStatus} from '../../../store/app-data/app-data.selectors.ts';
import {ratingsData, MIN_COMMENT_LENGTH} from '../../../const.ts';
import {RatingInput} from '../rating-input/rating-input.tsx';
import {ReviewsFormTextarea} from '../reviews-form-textarea/reviews-form-textarea.tsx';
import {ReviewsFormButton} from '../reviews-form-button/reviews-form-button.tsx';

export function ReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams<{ id: string }>();
  const [rating, setRating] = useState<string>('');
  const [review, setReview] = useState<string>('');
  const commentDataSendingStatus = useAppSelector(getCommentDataSendingStatus);
  const hasSubmitError = useAppSelector(getSubmitErrorStatus);

  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setIsFormDisabled(commentDataSendingStatus);

      if (!commentDataSendingStatus && !hasSubmitError) {
        setRating('');
        setReview('');
      }
    }
    return () => {
      isMounted = false;
    };
  }, [commentDataSendingStatus, hasSubmitError]);

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (id && rating && !isNaN(Number(rating)) && review && review.trim().length >= 50 && review.trim().length <= 300) {
      dispatch(
        postCommentAction({
          id: id,
          rating: Number(rating),
          comment: review.trim(),
        })
      );
    }
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleSubmit}
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingsData.map((data) => (
          <RatingInput
            key={data.value}
            value={data.value}
            onChange={handleRatingChange}
            checked={rating === data.value}
            title={data.title}
            disabled={isFormDisabled}
          />
        ))}
      </div>
      <ReviewsFormTextarea
        review={review}
        handleReviewChange={handleReviewChange}
        isFormDisabled={isFormDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <ReviewsFormButton
          review={review}
          isFormDisabled={isFormDisabled}
          rating={rating}
        />
      </div>
    </form>
  );
}
