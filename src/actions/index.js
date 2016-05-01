import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';
const ROOT_URL = 'http://localhost:3090';

export function siginUser( { email, password }) {
  return function(dispatch) {
    //submit email and password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(() => {

      });
  }
}


// redux thunk allows us to dispatch a function instead of an action.
// The function is automatically called with the dispatch method
