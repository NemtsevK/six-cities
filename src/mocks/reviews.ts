import {users} from './users.ts';
import {getRandomItem} from '../utils.ts';
import {Review} from '../types/review.ts';

export const reviews: Review[] = [
  {
    id: 'r-01',
    date: '2019-05-08T14:13:56.569Z',
    user: getRandomItem(users),
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'r-02',
    date: '2019-07-10T12:34:56.789Z',
    user: getRandomItem(users),
    comment: 'Great location, friendly staff, good breakfast.',
    rating: 5
  },
  {
    id: 'r-03',
    date: '2019-08-15T18:45:23.123Z',
    user: getRandomItem(users),
    comment: 'The place was amazing, I loved every moment of it!',
    rating: 5
  },
  {
    id: 'r-04',
    date: '2019-09-20T08:15:42.456Z',
    user: getRandomItem(users),
    comment: 'Could have been better, but still decent.',
    rating: 3
  },
  {
    id: 'r-05',
    date: '2019-10-25T16:30:10.678Z',
    user: getRandomItem(users),
    comment: 'Nice place, but a bit noisy at night.',
    rating: 4
  },
  {
    id: 'r-06',
    date: '2019-11-30T10:20:05.321Z',
    user: getRandomItem(users),
    comment: 'Not worth the price. Disappointed with the service.',
    rating: 2
  }
];
