import { FETCH_DATA, SUCCESS_FETCH_DATA, FAILURE_FETCH_DATA } from './Types';

const initialState = {
  loading: false,
  allMusic: [],
  errors: '',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_FETCH_DATA:
      return {
        allMusic: action.payload,
        loading: false,
        errors: '',
      };
    case FAILURE_FETCH_DATA:
      return {
        allMusic: [],
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
