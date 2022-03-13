import { useState, useEffect } from 'react';
import AbsenceGrid from '../AbsenceGrid/AbsenceGrid';
import type { ExtendedAbsence, Member } from './types';

const DataLayer = () => {
  const [absenceData, setAbsenceData] = useState<ExtendedAbsence[]>([]);
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
  const [isError, setIsError] = useState<boolean | undefined>(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const responseAbsence = await fetchData('absences.json');
      const absences = await responseAbsence.json();

      const responseMembers = await fetchData('members.json');
      const members = await responseMembers.json();

      const reformattedAbsences = reformatData(absences.payload, members.payload);
      setAbsenceData(reformattedAbsences);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const fetchData = async (filename: string) => {
    return fetch(filename, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
  };

  const reformatData = (absence: ExtendedAbsence[], members: Member[]) => {
    absence.forEach((absenceItem) => {
      absenceItem.period = absenceItem.startDate + ' - ' + absenceItem.endDate;
      const member = members.find((member) => member.userId === absenceItem.userId);
      absenceItem.memberName = member ? member.name : 'Unnamed';
      absenceItem.status = absenceItem.confirmedAt
        ? 'Confirmed'
        : absenceItem.rejectedAt
        ? 'Rejected'
        : 'Requested';
    });
    return absence;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div>
        <AbsenceGrid absences={absenceData} />
      </div>
    </main>
  );
};

export default DataLayer;
