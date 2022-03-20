import absences from '../absences';
import { mockRows } from '../../../components/AbsenceGrid/test/AbsenceGrid.test';
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from '../../actions/actionTypes';

describe('Reducer', () => {
  test('should return empty object as initial state', () => {
    expect(absences(undefined, {})).toEqual({});
  });

  test('should handle FETCH_REQUEST action', () => {
    const previousState = {};
    expect(absences(previousState, { type: FETCH_REQUEST })).toEqual({
      isLoading: true
    });
  });

  test('should handle FETCH_SUCCESS action', () => {
    const previousState = {
      isLoading: true
    };
    expect(absences(previousState, { type: FETCH_SUCCESS, data: mockRows })).toEqual({
      isLoading: false,
      absenceData: mockRows
    });
  });

  test('should handle FETCH_ERROR action', () => {
    const previousState = {
      isLoading: true
    };
    expect(absences(previousState, { type: FETCH_ERROR, err: Error })).toEqual({
      isLoading: false,
      error: Error
    });
  });
});
