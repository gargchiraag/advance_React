export const login = (username, password,firstName,lastName,role) => {
  return {
    type: "LOGIN",
    payload: {
      username,
      password,
      firstName,
      lastName,
      role,
    },
  };
};
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
