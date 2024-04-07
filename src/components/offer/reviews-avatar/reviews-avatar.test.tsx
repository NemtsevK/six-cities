import {render, screen} from '@testing-library/react';
import {makeFakeUser} from '../../../mocks/mocks.ts';
import {ReviewsAvatar} from './reviews-avatar.tsx';

describe('Component: ReviewsAvatar', () => {
  it('should render correctly', () => {
    const mockUser = makeFakeUser();
    const expectedAltText = 'Reviews avatar';

    render(<ReviewsAvatar user={mockUser}/>);

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
