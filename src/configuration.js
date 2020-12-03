const configuration = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: `${process.env.REACT_APP_BASE_URL}/authentication/callback`,
  response_type: 'code',
  post_logout_redirect_uri: `${process.env.REACT_APP_BASE_URL}/`,
  scope: 'openid profile email api offline_access',
  authority: process.env.REACT_APP_AUTHORITY,
  silent_redirect_uri: `${process.env.REACT_APP_BASE_URL}/authentication/silent_callback`,
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export default configuration;
