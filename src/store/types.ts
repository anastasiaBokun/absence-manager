import { ExtendedAbsence } from '../components/DataLayer/types';

export interface RootState {
  absenceData: ExtendedAbsence[];
  isLoading: boolean | undefined;
  error: Error | undefined;
}
