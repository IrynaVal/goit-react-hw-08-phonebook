const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUseremail = state => state.auth.user.email;

const selectIsCurrentUserFetching = state => state.auth.isCurrentUserFetching;

export const authSelectors = {
  selectIsLoggedIn,
  selectUseremail,
  selectIsCurrentUserFetching,
};

// export default authSelectors;
