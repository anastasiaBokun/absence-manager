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

    const loadingScreen = screen.getByText('Loading...');
    expect(loadingScreen).toBeInTheDocument();
  });

  test('renders error screen', () => {
    const errorState = {
      absenceData: undefined,
      isLoading: false,
      error: Error
    };
    renderDataLayer(errorState);

    const errorScreen = screen.getByText('Ooops! Something went wrong!');
    expect(errorScreen).toBeInTheDocument();
  });

  test('renders empty screen', () => {
    const emptyState = {
      absenceData: [],
      isLoading: false
    };
    renderDataLayer(emptyState);

    const emptyScreen = screen.getByText('There are no absence records to show');
    expect(emptyScreen).toBeInTheDocument();
  });
});
