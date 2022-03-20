import { render, screen } from '@testing-library/react';
import AbsenceGrid from './../AbsenceGrid';
import type { ExtendedAbsence } from '../../DataLayer/types';

export const mockRows: ExtendedAbsence[] = [
  {
    admitterId: 709,
    admitterNote: '',
    confirmedAt: new Date('2021-05-31T08:55:37.000+02:00'),
    createdAt: new Date('2021-05-30T16:33:57.000+02:00'),
    crewId: 352,
    endDate: new Date('2021-08-20'),
    id: 5879,
    memberNote: '',
    rejectedAt: null,
    startDate: new Date('2021-08-05'),
    type: 'sickness',
    userId: 8007,
    period: '2021-08-05 - 2021-08-20',
    status: 'Confirmed',
    memberName: 'Random Guy 1'
  },
  {
    admitterId: null,
    admitterNote: '',
    confirmedAt: new Date('2021-06-13T07:51:28.000+02:00'),
    createdAt: new Date('2021-06-12T15:21:08.000+02:00'),
    crewId: 352,
    endDate: new Date('2021-06-27'),
    id: 6310,
    memberNote: '',
    rejectedAt: null,
    startDate: new Date('2021-06-26'),
    type: 'vacation',
    userId: 5293,
    period: '2021-06-26 - 2021-06-27',
    status: 'Confirmed',
    memberName: 'Random Guy 2'
  },
  {
    admitterId: null,
    admitterNote: '',
    confirmedAt: null,
    createdAt: new Date('2021-06-12T15:21:16.000+02:00'),
    crewId: 352,
    endDate: new Date('2021-06-29'),
    id: 6311,
    memberNote: '',
    rejectedAt: null,
    startDate: new Date('2021-06-29'),
    type: 'vacation',
    userId: 5293,
    period: '2021-06-29 - 2021-06-29',
    status: 'Requested',
    memberName: 'Random Guy 3'
  }
];

describe('AbsenceGrid', () => {
  test('renders correctly', () => {
    render(<AbsenceGrid absences={mockRows} />);
    const absenceGrid = screen.getByRole('grid');
    expect(absenceGrid).toBeInTheDocument();
  });

  test('has correct number of rows', () => {
    render(<AbsenceGrid absences={mockRows} />);
    const gridRows = screen.queryAllByRole('row');
    expect(gridRows).toHaveLength(4);
  });
});
