import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {TState, TAppDispatch} from '../types/state.ts';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
