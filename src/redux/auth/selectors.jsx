export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUseremail = state => state.auth.user.email;

export const selectIsCurrentUserFetching = state =>
  state.auth.isCurrentUserFetching;

// export const authSelectors = {
//   selectIsLoggedIn,
//   selectUseremail,
//   selectIsCurrentUserFetching,
// };

// export default authSelectors;
