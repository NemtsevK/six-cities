import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {fetchFavoriteOffersAction, logoutAction, fetchUserDataAction} from '../../store/api-actions.ts';
import {getFavoriteOffers} from '../../store/app-data/app-data.selectors.ts';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/user-process.selectors.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Logo} from '../logo/logo.tsx';
import {HeaderNav} from './header-nav/header-nav.tsx';
import {UnauthenticatedUser} from './unauthenticated-user/unauthenticated-user.tsx';
import {AuthenticatedUser} from './аuthenticated-user/аuthenticated-user.tsx';

export function Header() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteOffersCount = favoriteOffers.length;
  const userData = useAppSelector(getUserData);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchUserDataAction());
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, authorizationStatus]);

  const handleLogout = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(logoutAction());
  };

  const renderAuthLinks = () =>
    authorizationStatus === AuthorizationStatus.Auth ? (
      <AuthenticatedUser
        userData={userData}
        favoriteOffersCount={favoriteOffersCount}
        onLogout={(event: React.FormEvent) => handleLogout(event)}
      />
    ) : (
      <UnauthenticatedUser/>
    );

  const location = useLocation();

  let isMainPage = false;
  let isLoginPage = false;

  switch (true) {
    case location.pathname === String(AppRoute.Main):
      isMainPage = true;
      break;
    case location.pathname === String(AppRoute.Login):
      isLoginPage = true;
      break;
    default:
      isLoginPage = false;
  }

  const isHeaderNav = isLoginPage ? (
    ''
  ) : (
    <HeaderNav renderAuthLinks={renderAuthLinks}/>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo
              className="header"
              width={'81'}
              height={'41'}
              isMainPage={isMainPage}
            />
          </div>
          {isHeaderNav}
        </div>
      </div>
    </header>
  );
}
