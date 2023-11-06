import { types } from "./types";
import axios from "axios";

const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://potenciar-solidario.onrender.com/register",
        user
      );

      dispatch({ type: types.REGISTER, payload: data.userWithoutPassword });
      return Promise.resolve(data);
    } catch (error) {
      dispatch({
        type: types.ERROR_REGISTER,
        payload: error.response.data.message,
      });
      console.log(error.response.data);
      return Promise.reject(error);
    }
  };
};

const getProfile = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `https://potenciar-solidario.onrender.com/users/${id}`
      );
      //console.log(data.id) // si aparece la data
      dispatch({ type: types.GET_PROFILE, payload: data });
      return Promise.resolve(data);
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: types.ERROR_REGISTER, payload: error.response.data });
      return Promise.reject(error);
    }
  };
};

const updateProfile = (id, user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `https://potenciar-solidario.onrender.com/users/${id}`,
        { ...user }
      );
      dispatch({ type: types.UPDATE_PROFILE, payload: data });
      return Promise.resolve(data);
    } catch (error) {
      console.log(error.response.data);

      return Promise.reject(error);
    }
  };
};
const deleteProfile = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `https://potenciar-solidario.onrender.com/users/${id}`
      );
      dispatch({ type: types.DELETE_PROFILE });
      return Promise.resolve(data);
    } catch (error) {
      console.log(error.response.data);

      return Promise.reject(error);
    }
  };
};
const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://potenciar-solidario.onrender.com/login",
        { email, password }
      );

      dispatch({ type: types.LOGIN, payload: data });
      return Promise.resolve(data);
    } catch (error) {
      dispatch({
        type: types.ERROR_LOGIN,
        payload: error.response.data.message,
      });
      console.log(error.response.data);
      return Promise.reject(error);
    }
  };
};

const loginWithGoogleAction = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `https://potenciar-solidario.onrender.com/authGoogle`,
        { idToken: token.credential }
      );
      // console.log(data)
      dispatch({ type: types.LOGIN_WITH_GOOGLE, payload: data });
      return Promise.resolve(data);
    } catch (error) {
      dispatch({
        type: types.ERROR_LOGIN,
        payload: error.response.data.message,
      });
      console.log(error.response.data);
      return Promise.reject(error);
    }
  };
};

const logoutAction = () => {
  return (dispatch) => {
    try {
      dispatch({ type: types.LOGOUT });
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
};

export {
  registerUser,
  getProfile,
  loginUser,
  loginWithGoogleAction,
  logoutAction,
  updateProfile,
  deleteProfile,

  // userAuthentificated
};
