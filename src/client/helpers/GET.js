import LStorage from './storage';

const api = process.env.REACT_APP_API_URL;

const GET_ENDPOINTS = {
  projects: `${api}/projects`,
  getUserData: `${api}/users/me`,
};

export const getData = (endpoint, addition = '') => {
  const url = GET_ENDPOINTS[endpoint];
  const { access_token: accessToken, token_type: tokenType } = LStorage.getFromStorage('user') || {};

  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  headers.append('Accept', 'application/json');
  if (accessToken) {
    headers.append('Authorization', `${tokenType || 'Bearer'} ${accessToken}`);
  }

  return new Promise((resolve, reject) => fetch(url, {
      method: 'GET',
      // headers, uncomment this when api will be ready
    })
      .then(response => {
        if (!response.ok) {
          // here we can handle errors id response not ok
        }
        resolve(response.json());
      })
      .catch(error => {
        // here we could handle errors if something with fetch is bad
        reject(error);
      }),
  );
};
