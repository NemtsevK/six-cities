import {Cities, DEFAULT_CITY_NAME} from '../../const.ts';
import {appProcess, changeCity} from './app-process.slice.ts';

describe('AppProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {city: DEFAULT_CITY_NAME};

    const result = appProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {city: DEFAULT_CITY_NAME};

    const result = appProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change city with "changeCity" action', () => {
    const initialState = {city: DEFAULT_CITY_NAME};
    const expectedState = {city: Cities.Amsterdam};

    const result = appProcess.reducer(
      initialState,
      changeCity({city: Cities.Amsterdam})
    );

    expect(result).toEqual(expectedState);
  });
});
