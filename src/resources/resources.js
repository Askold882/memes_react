import axios from 'axios';

const base_url = 'http://localhost:3000';

export function checkToken(params) {
  return  axios.get(`${base_url}/sessions?user_token=${params.user_token}`)
}

export function createSession(params) {
  return axios.post(`${base_url}/sessions`, params)
}

export function createUser(params) {
  return axios.post(`/${base_url}/users`, params)
}