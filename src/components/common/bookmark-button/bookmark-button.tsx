import {memo} from 'react';
import {AppRoute, AuthorizationStatus} from '../../../const.ts';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {redirectToRoute} from '../../../store/action.ts';
import {toggleFavoriteAction} from '../../../store/api-actions.ts';
import {getAuthCheckedStatus, getAuthorizationStatus} from '../../../store/user-process/user-process.selectors.ts';

type BookmarkButtonProps = {
  isOfferPage?: boolean;
  isFavorite: boolean;
  width: string;
  height: string;
  id: string | undefined;
};

export function BookmarkButton({isOfferPage, isFavorite, width, height, id}: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  useAppSelector(getAuthCheckedStatus);

  const buttonClassName = isOfferPage
    ? 'offer__bookmark-button'
    : 'place-card__bookmark-button';

  const svgClassName = isOfferPage
    ? 'offer__bookmark-icon'
    : 'place-card__bookmark-icon';

  let isFavoriteClassName;
  if (isFavorite) {
    if (isOfferPage) {
      isFavoriteClassName = 'offer__bookmark-button--active';
    } else {
      isFavoriteClassName = 'place-card__bookmark-button--active';
    }
  } else {
    isFavoriteClassName = '';
  }

  const toggleFavoriteHandler = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
    }

    dispatch(
      toggleFavoriteAction({
        id: id,
        status: isFavorite ? 0 : 1,
      })
    );
  };

  return (
    <button
      className={`${buttonClassName} ${isFavoriteClassName} button`}
      type="button"
      onClick={toggleFavoriteHandler}
    >
      <svg className={svgClassName} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export const MemoizedBookmarkButton = memo(BookmarkButton);
