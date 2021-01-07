const baseURL = process.env.REACT_APP_API_URL;

const login = process.env.REACT_APP_API_LOGIN;
const signup = process.env.REACT_APP_API_SIGNUP;
const token = process.env.REACT_APP_API_TOKEN;
const userinfo = process.env.REACT_APP_API_USERINFO;
const forgot = process.env.REACT_APP_API_FORGOT;
const change = process.env.REACT_APP_API_CHANGE;

export const Api = {
  login: () => `${baseURL}/${login}`,
  signup: () => `${baseURL}/${signup}`,
  token: () => `${baseURL}/${token}`,
  userinfo: () => `${baseURL}/${userinfo}`,
  forgot: () => `${baseURL}/${forgot}`,
  change: () => `${baseURL}/${change}`,
};
