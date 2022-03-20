import { render, screen } from '@testing-library/react';
import DataLayer from './../DataLayer';
import { Provider } from 'react-redux';
import { mockRows } from '../../AbsenceGrid/test/AbsenceGrid.test';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const buildStore = configureStore([thunk]);

const renderDataLayer = (state) => {
  const store = buildStore(state);
  render(
    <Provider store={store}>
      <DataLayer />
    </Provider>
  );
};

describe('DataLayer', () => {
  test('renders data if it is loaded', () => {
    const dataState = {
      absenceData: mockRows,
      isLoading: false,
      error: undefined
    };
    renderDataLayer(dataState);

    const absenceGrid = screen.getByRole('grid');
    expect(absenceGrid).toBeInTheDocument();
  });

  test('renders loading screen', () => {
    const loadingState = {
      absenceData: undefined,
      isLoading: true,
      error: undefined
    };
    renderDataLayer(loadingState);

    const absenceGrid = screen.getByText('Loading...');
    expect(absenceGrid).toBeInTheDocument();
  });

  test('renders error screen', () => {
    const errorState = {
      absenceData: undefined,
      isLoading: false,
      error: Error
    };
    renderDataLayer(errorState);

    const absenceGrid = screen.getByText('Ooops! Something went wrong!');
    expect(absenceGrid).toBeInTheDocument();
  });
});
