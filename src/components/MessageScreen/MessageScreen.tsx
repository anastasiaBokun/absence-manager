import { MessageLayout } from './styles';
import type { MessageScreenProps } from './types';
import { CircularProgress } from '@mui/material';

const MessageScreen = (props: MessageScreenProps) => {
  const errorMessage = 'Ooops! Something went wrong!';
  const loadingMessage = 'Loading...';
  const emptyMessage = 'There are no absence records to show';

  return (
    <MessageLayout>
      {props.mode === 'loading' ? <CircularProgress color={'inherit'} /> : null}
      <h2>
        {props.mode === 'error'
          ? errorMessage
          : props.mode === 'loading'
          ? loadingMessage
          : emptyMessage}
      </h2>
    </MessageLayout>
  );
};

export default MessageScreen;
