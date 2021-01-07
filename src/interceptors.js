import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { accessToken, clearTokens, refreshToken, saveToken } from './storage';
import { Api } from './api';

export const Interceptors = () => {
  const history = useHistory();

  /**
   * Function for attempting to refresh the access token.
   * Upon success, saves the new token to localStorage and redirects user to their destination.
   *
   * Otherwise error suggests the refresh token has expired.
   * In that case, clear all tokens from localStorage and redirect user to login page.
   */
  const tokenRefresh = async () => {
    axios
      .post(Api.token(), { refreshToken: refreshToken() })
      .then((result) => {
        const { AccessToken } = result.data;
        saveToken(AccessToken);
        history.go(0);
      })
      .catch(() => {
        clearTokens();
        history.replace('/login');
      });
  };

  /**
   * Utility function to check if access token exists in localStorage
   * If token is found, return the token in a Bearer string
   * Otherwise return empty string
   */
  const bearerToken = () => (accessToken() ? `Bearer ${accessToken()}` : '');

  /**
   * Set default Content-Type and Authorization headers
   * This is performed each time an axios call is executed
   */
  axios.interceptors.request.use((req) => {
    req.headers['Content-Type'] = 'application/json';
    req.headers.authorization = bearerToken();

    return req;
  });

  /**
   * React to status code 403, when access token has expired,
   * and trigger attempt to refresh it
   */
  axios.interceptors.response.use(
    (res) => res,
    (error) => {
      const { config, status } = error.response;
      status === 403 && !config.url.includes('/token') && tokenRefresh();
    },
  );

  return '';
};
