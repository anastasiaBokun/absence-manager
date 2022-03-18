import { useEffect } from 'react';
import AbsenceGrid from '../AbsenceGrid/AbsenceGrid';
import type { ExtendedAbsence } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAbsences } from '../../store/actions/absences';
import { RootState } from '../../store/types';

const DataLayer = () => {
  const absenceData: ExtendedAbsence[] = useSelector((state: RootState) => state.absenceData);
  const isLoading: boolean | undefined = useSelector((state: RootState) => state.isLoading);
  const error: Error | undefined = useSelector((state: RootState) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAbsences());
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
