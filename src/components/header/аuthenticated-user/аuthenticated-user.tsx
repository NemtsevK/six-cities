import React from 'react';
import {HeaderNavItemUser} from '../header-nav-item-user/header-nav-item-user.tsx';
import {HeaderNavItemListItem} from '../header-nav-item-list-item/header-nav-item-list-item.tsx';

type AuthenticatedUserProps = {
  userData: { email: string; avatarUrl: string };
  favoriteOffersCount: number;
  onLogout: (event: React.FormEvent) => void;
};

export function AuthenticatedUser({userData, favoriteOffersCount, onLogout}: AuthenticatedUserProps) {
  return (
    <>
      <HeaderNavItemUser
        userData={userData}
        favoriteOffersCount={favoriteOffersCount}
      />
      <HeaderNavItemListItem onLogout={onLogout}/>
    </>
  );
}
