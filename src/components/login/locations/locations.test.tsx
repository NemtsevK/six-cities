import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {citiesNames} from '../../../const';
import {getRandomCityName} from '../../../utils.ts';
import {withHistory, withStore} from '../../../mocks/mock-component.tsx';
import {makeFakeStore} from '../../../mocks/mocks.ts';
import {Locations} from './locations.tsx';

describe('Component: Locations', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const locationsItemElementTestId = 'locationsItemElement';
    const mockCityName = getRandomCityName(citiesNames);

    const withHistoryComponent = withHistory(
      <Locations randomCity={mockCityName}/>,
      mockHistory
    );
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(locationsItemElementTestId)).toBeInTheDocument();
    expect(screen.getByText(mockCityName)).toBeInTheDocument();
  });
});
