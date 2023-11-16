const token = import.meta.env.VITE_TOKEN;

const API_URL = `https://v6.exchangerate-api.com/v6/${token}/latest/`

export const getData = (baseCode) => (
  fetch(API_URL + baseCode)
    .then(response => response.json())
    .catch(err => { throw new Error('404 page not found') })
);