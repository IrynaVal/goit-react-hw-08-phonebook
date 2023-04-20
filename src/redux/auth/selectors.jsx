export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUseremail = state => state.auth.user.email;

export const selectIsCurrentUserFetching = state =>
  state.auth.isCurrentUserFetching;

export const selectAuthIsLoading = state => state.auth.isLoading;

export const selectAuthError = state => state.auth.error;
