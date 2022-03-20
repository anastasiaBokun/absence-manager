import { render, screen } from '@testing-library/react';
import Error from './../Error';

describe('Error', () => {
  test('renders error message', () => {
    render(<Error />);
    const errorMessage = screen.getByText('Ooops! Something went wrong!');
    expect(errorMessage).toBeInTheDocument();
  });
});
