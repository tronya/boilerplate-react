import LStorage from './storage';

const api = process.env.REACT_APP_API_URL;

const POST_ENDPOINTS = {
  sign_in: `${api}/users/sign_in`,
};

export const postData = (endpoint, data = '') => {
  const url = POST_ENDPOINTS[endpoint];
  const { access_token: accessToken, token_type: tokenType } = LStorage.getFromStorage('user') || {};

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  if (accessToken) {
    headers.append('Authorization', `${tokenType || 'Bearer'} ${accessToken}`);
  }

  return new Promise((resolve, reject) => fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
      .then(r => r.json())
      .then(response => {
        if (!response.ok) {
          reject(response);
        }
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        // here we could handle errors if something with fetch is bad
        reject(error);
      }),
  );
};
