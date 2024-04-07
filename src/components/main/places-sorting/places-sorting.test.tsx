import {render, screen} from '@testing-library/react';
import {PlacesSorting} from './places-sorting.tsx';

describe('Component: PlacesSortingForm', () => {
  it('should render correctly', () => {
    const expectedText = 'Sort by';

    render(
      <PlacesSorting
        handleSortOptionClick={() => {}}
        sortOption="Popular"
        handleSort={() => {}}
        sortingOptionsVisible
        setSortingOptionsVisible={() => {}}
      />
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
