import { render, screen } from '@testing-library/react';
import Header from './../Header';

describe('Header', () => {
  test('renders app title', () => {
    render(<Header />);
    const errorMessage = screen.getByText('Absence Manager');
    expect(errorMessage).toBeInTheDocument();
  });
});
