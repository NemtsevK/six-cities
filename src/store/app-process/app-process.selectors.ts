import {NameSpace} from '../../const.ts';
import {TState} from '../../types/state.ts';

export const getCity = (state: Pick<TState, NameSpace.App>): string => state[NameSpace.App].city;
