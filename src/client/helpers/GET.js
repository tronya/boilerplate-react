const api = process.env.REACT_APP_API_URL;

const GET_ENDPOINTS = {
  projects: `${api}/projects`,
};

export const getData = (endpoint, addition = '') => {
  const url = GET_ENDPOINTS[endpoint];

  return new Promise((resolve, reject) => fetch(url, {
      method: 'GET',
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
