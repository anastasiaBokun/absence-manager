import { useEffect } from 'react';
import AbsenceGrid from '../AbsenceGrid/AbsenceGrid';
import type { ExtendedAbsence } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAbsences } from '../../store/actions/absences';
import { RootState } from '../../store/types';
import Header from '../Header/Header';
import { Layout } from './styles';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Empty from '../Empty/Empty';

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
      <Layout>
        <Header />
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : absenceData?.length ? (
          <AbsenceGrid absences={absenceData} />
        ) : (
          <Empty />
        )}
      </Layout>
    </main>
  );
};

export default DataLayer;
