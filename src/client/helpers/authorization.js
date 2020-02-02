const api = process.env.REACT_APP_API_URL;

export const signInRequest = data => {
  const formData = new FormData();

  Object.keys(data).forEach(e => {
    formData.append(e, data[e]);
  });

  return new Promise((resolve, reject) => fetch(`${api}/users/sign_in`, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          reject(response);
        }
        resolve(response.json());
      })
      .catch(error => {
        console.log(error);
        // here we could handle errors if something with fetch is bad
        reject(error);
      }),
  );
};
