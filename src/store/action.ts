import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const.ts';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const setCurrentCity = createAction<string>('app/setCurrentCity');
