import {
  LOGIN_SUCCESSFUL,
  //LOGIN_FAILED,
  REGISTER_SUCCESSFUL,
  //REGISTER_FAILED,
  API_URL,
} from "../constants";

export const register = (values, history, dispatch) => {
  return async (dispatch) => {
    console.log(values);
    //fetch request
    let request = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    }).catch((error) => console.log(error));

    const response = await request;
    if (response) {
      const result = await response.json();
      console.log(result);
      if (result.email) {
        dispatch({ type: REGISTER_SUCCESSFUL, payload: result });
        history.push("/dashboard");
      }
    }
  };
};

export const login = (values, history, dispatch) => {
  return async (dispatch) => {
    console.log(values);
    //fetch request
    let request = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    }).catch((error) => console.log(error));

    const response = await request;
    if (response) {
      const result = await response.json();
      console.log(result);
      if (result.email) {
        dispatch({ type: LOGIN_SUCCESSFUL, payload: result });
        history.push("/dashboard");
      }
    }
  };
};
