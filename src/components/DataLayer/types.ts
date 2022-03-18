interface Member {
  crewId: number;
  id: number;
  image: string;
  name: string;
  userId: number;
}

interface Absence {
  admitterId: number | null;
  admitterNote: string;
  confirmedAt: Date | null;
  createdAt: Date;
  crewId: number;
  endDate: Date;
  id: number;
  memberNote: string;
  rejectedAt: Date | null;
  startDate: Date;
  type: 'sickness' | 'vacation';
  userId: number;
}

interface ExtendedAbsence extends Absence {
  period: string;
  status: 'Rejected' | 'Confirmed' | 'Requested';
  memberName: string;
}

export type { Member, ExtendedAbsence };
