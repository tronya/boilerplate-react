import { USER_GET_INFO, USER_SIGN_IN } from '../actions/userActions';
import LStorage from '../../helpers/storage';

const initialState = LStorage.getFromStorage('user');

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };

    case USER_GET_INFO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
