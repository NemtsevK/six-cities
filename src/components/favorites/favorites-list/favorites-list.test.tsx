import {render, screen} from '@testing-library/react';
import {withStore} from '../../../mocks/mock-component.tsx';
import {makeFakeStore} from '../../../mocks/mocks.ts';
import {FavoritesList} from './favorites-list.tsx';

describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const favoritesListElementTestId = 'favoritesListElement';

    const {withStoreComponent} = withStore(
      <FavoritesList/>,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(favoritesListElementTestId)).toBeInTheDocument();
  });
});
