import { NameSpace, citiesNames } from '../../const.ts';
import { TState } from '../../types/state.ts';
import { getRandomCityName } from '../../utils.ts';
import { getCity } from './app-process.selectors.ts';

describe('AppProcess selectors', () => {
  const mockCity = getRandomCityName(citiesNames);
  const mockState = {
    [NameSpace.App]: {
      city: mockCity,
    },
  };
  describe('getCity', () => {
    it('should return correct city', () => {
      const { city } = mockState[NameSpace.App];
      const result = getCity(mockState as Pick<TState, NameSpace.App>);
      expect(result).toEqual(city);
    });
  });
});
