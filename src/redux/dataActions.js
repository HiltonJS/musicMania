import { FETCH_DATA, SUCCESS_FETCH_DATA, FAILURE_FETCH_DATA } from './Types';
import axios from 'axios';

export const fetchData = () => {
  return { type: FETCH_DATA };
};
export const fetchDataSuccess = (allMusic) => {
  return { type: SUCCESS_FETCH_DATA, payload: allMusic };
};
export const fetchDataFailure = (errors) => {
  return {
    type: FAILURE_FETCH_DATA,
    payload: errors,
  };
};
export const fetchMusic = () => {
  return (dispatch) => {
    dispatch(fetchData);
    axios
      .get('/HipHop')
      .then((res) => {
        const allMusic = res.data;
        dispatch(fetchDataSuccess(allMusic));
      })
      .catch((err) => {
        const errors = err.message;
        dispatch(fetchDataFailure(errors));
      });
  };
};
