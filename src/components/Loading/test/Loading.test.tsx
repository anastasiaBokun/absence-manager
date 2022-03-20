import { render, screen } from '@testing-library/react';
import Loading from './../Loading';

describe('Loading', () => {
  test('renders loading message', () => {
    render(<Loading />);
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders progress bar', () => {
    render(<Loading />);
    const loadingMessage = screen.getByRole('progressbar');
    expect(loadingMessage).toBeInTheDocument();
  });
});
