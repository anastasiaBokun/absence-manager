import { useEffect } from 'react';
import AbsenceGrid from '../AbsenceGrid/AbsenceGrid';
import type { ExtendedAbsence } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAbsences } from '../../store/actions/absences';
import { RootState } from '../../store/types';
import Header from '../Header/Header';
import { Layout } from './styles';
import MessageScreen from '../MessageScreen/MessageScreen';

const DataLayer = () => {
  const absenceData: ExtendedAbsence[] = useSelector((state: RootState) => state.absenceData);
  const isLoading: boolean | undefined = useSelector((state: RootState) => state.isLoading);
  const error: Error | undefined = useSelector((state: RootState) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAbsences());
  }, []);

  const mode = isLoading ? 'loading' : error ? 'error' : !absenceData?.length ? 'empty' : null;

  return (
    <main>
      <Layout>
        <Header />
        {mode ? <MessageScreen mode={mode} /> : <AbsenceGrid absences={absenceData} />}
      </Layout>
    </main>
  );
};

export default DataLayer;
