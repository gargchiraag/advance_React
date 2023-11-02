const initialState = {
  username: null,
  password: null,
  firstName:"",
  lastName:"",
  role:"",
//   device_token: null,
//   device_type: null,
  isLoggedin:false
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        firstName:action.payload.firstName,
        lastName:action.payload.lastName,
        role:action.payload.role,
        // device_token: action.payload.device_token,
        // device_type: action.payload.device_type,
        isLoggedin:true,
      };

    case "LOGOUT":
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
export default userReducer;
