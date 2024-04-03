import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from '../../../const.ts';

type ReviewsFormButtonProps = {
  review: string;
  isFormDisabled: boolean;
  rating: string;
};

export function ReviewsFormButton({review, isFormDisabled, rating}: ReviewsFormButtonProps): JSX.Element {
  return (
    <button
      className="reviews__submit form__submit button"
      type="submit"
      disabled={isFormDisabled || !rating || !review || review.trim().length < MIN_COMMENT_LENGTH || review.trim().length > MAX_COMMENT_LENGTH}
    >
      Submit
    </button>
  );
}
