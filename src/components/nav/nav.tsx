import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions.ts';
import {AppRoute, AuthorizationStatus} from '../../const.ts';

export function Nav(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const favoriteOffersCount = useAppSelector((state) => state.favoriteOffers.length);

  const renderAuthLinks = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      return (
        <>
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              <span className="header__favorite-count">
                {favoriteOffersCount}
              </span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={AppRoute.Login}
              onClick={(event) => {
                event.preventDefault();
                dispatch(logoutAction());
              }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Login}>
            <span className="header__signout">Sign in</span>
          </Link>
        </li>
      );
    }
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {renderAuthLinks()}
      </ul>
    </nav>
  );
}
