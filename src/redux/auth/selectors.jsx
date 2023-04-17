const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUseremail = state => state.auth.user.email;

export const authSelectors = {
  selectIsLoggedIn,
  selectUseremail,
};

// export default authSelectors;
