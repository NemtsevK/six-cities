import {User} from '../types/user.ts';
import {AVATAR_URL} from '../const.ts';

export const users: User[] = [
  {
    name: 'Oliver Conner',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: false,
    email: 'Oliver.conner@gmail.com',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
  },
  {
    name: 'Ava Johnson',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: true,
    email: 'ava.johnson@example.com',
    token: 'QXZhLmpvaG5zb25AZXhhbXBsZS5jb20='
  },
  {
    name: 'Liam Smith',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: false,
    email: 'liam.smith@example.com',
    token: 'TGltIFNtaXRoQGV4YW1wbGUuY29t'
  },
  {
    name: 'Charlotte Williams',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: true,
    email: 'charlotte.williams@example.com',
    token: 'Q2hhcnRvbGluZSBXaWxsaWFtc0BleGFtcGxlLmNvbQ=='
  },
];
