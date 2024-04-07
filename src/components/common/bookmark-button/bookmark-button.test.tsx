import {render, screen} from '@testing-library/react';
import {withStore} from '../../../mocks/mock-component.tsx';
import {makeFakeOffer, makeFakeStore} from '../../../mocks/mocks.ts';
import {BookmarkButton} from './bookmark-button.tsx';

describe('Component: BookmarkButton', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const {id} = mockOffer;
    const expectedText = 'To bookmarks';

    const {withStoreComponent} = withStore(
      <BookmarkButton
        isOfferPage={false}
        isFavorite={false}
        id={id}
        width="32"
        height="32"
      />,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
