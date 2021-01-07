const ACCESS_TOKEN = 'access_token';

const REFRESH_TOKEN = 'refresh_token';

export const clearAll = () => localStorage.clear();

export const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

export const accessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const refreshToken = () => localStorage.getItem(REFRESH_TOKEN);

export const saveToken = (accessToken, refreshToken = null) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);

  if (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }
};
