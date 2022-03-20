import { render, screen } from '@testing-library/react';
import Empty from '../Empty';

describe('Empty', () => {
  test('renders empty message', () => {
    render(<Empty />);
    const emptyMessage = screen.getByText('There are no absence records to show');
    expect(emptyMessage).toBeInTheDocument();
  });
});
