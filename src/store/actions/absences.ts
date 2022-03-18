import { ExtendedAbsence, Member } from '../../components/DataLayer/types';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actionTypes';

export const fetchAbsences = () => async (dispatch) => {
  await dispatch({ type: FETCH_REQUEST });
  try {
    const responseAbsence = await fetchData('absences.json');
    const absences = await responseAbsence.json();

    const responseMembers = await fetchData('members.json');
    const members = await responseMembers.json();

    const reformattedAbsences = reformatData(absences.payload, members.payload);

    return dispatch({
      type: FETCH_SUCCESS,
      data: reformattedAbsences
    });
  } catch (err) {
    return dispatch({ type: FETCH_ERROR, err });
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
