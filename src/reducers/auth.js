import {
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED,
} from "../constants";

const initialState = {
  isAuthenticated: false,
  email: "",
  gender: "",
  year_of_birth: "",
  token: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFUL:
    case LOGIN_SUCCESSFUL:
      return Object.assign({}, state, { isAuthenticated: true });
    case REGISTER_FAILED:
    case LOGIN_FAILED:
      return Object.assign({}, state, { isAuthenticated: false });
    default:
      return state;
  }
};

export default auth;
