import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gama-next-server.herokuapp.com/'
});

const ACCESS_TOKEN_MAP_BOX =
"access_token=PEGUE_SEU_TOKEN_NO_SITE_DO_MAP_BOX";

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
).then(response => response.json()).then(data => data);

export const fetchUserGithub = (login: string) =>
fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(data => data);