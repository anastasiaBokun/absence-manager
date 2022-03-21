import { render, screen } from '@testing-library/react';
import MessageScreen from '../MessageScreen';

describe('MessageScreen', () => {
  test('renders error message', () => {
    render(<MessageScreen mode={'error'} />);
    const errorMessage = screen.getByText('Ooops! Something went wrong!');
    expect(errorMessage).toBeInTheDocument();
  });

  test('renders loading message', () => {
    render(<MessageScreen mode={'loading'} />);
    const errorMessage = screen.getByText('Loading...');
    expect(errorMessage).toBeInTheDocument();
  });

  test('renders progress bar', () => {
    render(<MessageScreen mode={'loading'} />);
    const loadingMessage = screen.getByRole('progressbar');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders empty message', () => {
    render(<MessageScreen mode={'empty'} />);
    const errorMessage = screen.getByText('There are no absence records to show');
    expect(errorMessage).toBeInTheDocument();
  });
});
