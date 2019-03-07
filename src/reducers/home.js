import { getCars } from '../api/cars';

export const START_LOAD_HOME = 'app/home/START_LOAD_HOME';
export const LOAD_HOME_SUCCESS = 'app/home/LOAD_HOME_SUCCESS';
export const LOAD_HOME_FAIL = 'app/home/LOAD_HOME_FAIL';

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: '',
};

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOAD_HOME:
      return {
        ...state,
        loading: true,
        isError: false,
        errors: ''
      };
    case LOAD_HOME_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ''
      };
    case LOAD_HOME_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        isError: true,
        errors: action.errors
      };
    default:
      return state;
  }
};

export const startLoadHome = () => {

  console.log('-- startLoadHome --');

  return {
    type: START_LOAD_HOME,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const loadHomeSuccess = (data) => {

  console.log('-- loadHomeSuccess --');

  return {
    type: LOAD_HOME_SUCCESS,
    data,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const loadHomeFail = (errors) => {

  console.log('-- loadHomeFail --');

  return {
    type: LOAD_HOME_FAIL,
    data : [],
    loading: false,
    isError: true,
    errors
  };
};

export const loadHomeAPI = () => {

  console.log('-- loadHomeAPI --');

  return dispatch => {
    dispatch(startLoadHome());
    getCars()
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log('--res--')
        console.log(res);
        dispatch(loadHomeSuccess(res));
      })
      .catch((err) => {
        console.log('-- err --');
        console.log(err);
        loadHomeFail(['load data error']);
      });
  };
};
