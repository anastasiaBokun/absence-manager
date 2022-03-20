import { CircularProgress } from '@mui/material';
import { LoadingLayout } from './styles';

function Loading() {
  return (
    <LoadingLayout>
      <CircularProgress color={'inherit'} />
      <h3>Loading...</h3>
    </LoadingLayout>
  );
}

export default Loading;
