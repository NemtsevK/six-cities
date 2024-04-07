import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {citiesNames} from '../../../const.ts';
import {getRandomCityName} from '../../../utils.ts';
import {withHistory, withStore} from '../../../mocks/mock-component.tsx';
import {makeFakeStore} from '../../../mocks/mocks.ts';
import {LocationsItem} from './locations-items.tsx';

describe('Component: LocationsItem', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const locationsItemElementTestId = 'locationsItemElement';
    const mockCityName = getRandomCityName(citiesNames);

    const withHistoryComponent = withHistory(
      <LocationsItem city={mockCityName}/>,
      mockHistory
    );
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(locationsItemElementTestId)).toBeInTheDocument();
  });
});
