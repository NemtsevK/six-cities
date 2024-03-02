import {User} from '../types/user.ts';
import {getRandomAvatar} from '../utils.ts';

export const users: User[] = [
  {
    name: 'Oliver Conner',
    avatarUrl: getRandomAvatar(),
    isPro: false,
    email: 'Oliver.conner@gmail.com',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
  },
  {
    name: 'Ava Johnson',
    avatarUrl: getRandomAvatar(),
    isPro: true,
    email: 'ava.johnson@example.com',
    token: 'QXZhLmpvaG5zb25AZXhhbXBsZS5jb20='
  },
  {
    name: 'Liam Smith',
    avatarUrl: getRandomAvatar(),
    isPro: false,
    email: 'liam.smith@example.com',
    token: 'TGltIFNtaXRoQGV4YW1wbGUuY29t'
  },
  {
    name: 'Charlotte Williams',
    avatarUrl: getRandomAvatar(),
    isPro: true,
    email: 'charlotte.williams@example.com',
    token: 'Q2hhcnRvbGluZSBXaWxsaWFtc0BleGFtcGxlLmNvbQ=='
  },
  {
    name: 'Emma Johnson',
    avatarUrl: getRandomAvatar(),
    isPro: false,
    email: 'emma.johnson@example.com',
    token: 'RW1tYS5qb2huU2hvb3RlckBleGFtcGxlLmNvbQ=='
  },
  {
    name: 'Noah Brown',
    avatarUrl: getRandomAvatar(),
    isPro: true,
    email: 'noah.brown@example.com',
    token: 'Tm9haC5icm93bkBleGFtcGxlLmNvbQ=='
  },
  {
    name: 'Ava Wilson',
    avatarUrl: getRandomAvatar(),
    isPro: false,
    email: 'ava.wilson@example.com',
    token: 'QXZhLndpbHNvbkBleGFtcGxlLmNvbQ=='
  },
  {
    name: 'Ethan Martinez',
    avatarUrl: getRandomAvatar(),
    isPro: true,
    email: 'ethan.martinez@example.com',
    token: 'RXRoYW4ubWFydGluezEzQGdtYWlsLmNvbQ=='
  },
];
