// import React from 'react';
// import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import AbsenceGrid from './../AbsenceGrid';

describe('AbsenceGrid', () => {
  test('renders correctly', () => {
    render(<AbsenceGrid />);
    const absenceGrid = screen.getByRole('grid');
    expect(absenceGrid).toBeInTheDocument();
  });
});
