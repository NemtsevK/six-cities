import {render, screen} from '@testing-library/react';
import {withStore} from '../../../mocks/mock-component.tsx';
import {makeFakeComment, makeFakeStore} from '../../../mocks/mocks.ts';
import {OfferReviews} from './offer-reviews.tsx';

describe('Component: OfferReviews', () => {
  it('should render correctly', () => {
    const mockComment = makeFakeComment();
    const mockComments = Array.from({length: 5}, () => mockComment);
    const expectedText = new RegExp(/Reviews/i);

    const {withStoreComponent} = withStore(
      <OfferReviews reviews={mockComments}/>,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
