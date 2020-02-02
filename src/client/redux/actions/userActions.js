import LStorage from '../../helpers/storage';
import { signInRequest } from '../../helpers/authorization';
import { getData } from '../../helpers/GET';

export const USER_SIGN_IN = 'USER_SIGN_IN';
export const USER_GET_INFO = 'USER_GET_INFO';

export const userSignIn = data => dispatch => signInRequest(data)
    .then(resp => {
      if (resp) {
        dispatch({
          type: USER_SIGN_IN,
          payload: resp,
        });
        LStorage.saveToStorage('user', resp);
        return resp;
      }
    })
    .catch(error => {
      console.warn(error);
    });

export const getUserInfo = () => dispatch => getData('getUserData')
    .then(resp => {
      if (resp) {
        dispatch({
          type: USER_GET_INFO,
          payload: resp,
        });
        return resp;
      }
    })
    .catch(error => {
      console.warn(error);
    });
