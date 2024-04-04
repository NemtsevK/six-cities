import {TUser} from './user.ts';

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
};

export type TCommentData = {
  id: string;
  comment: string;
  rating: number;
};

export type TReviews = TReview[];
