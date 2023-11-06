import {
  CREATE_USER,
  DELETE_USER,
  GET_USERS,
  GET_USER_DETAIL,
  CLEAR_USER_DETAIL,
  UPDATE_USER,
} from "../action-types";

import axios from "axios";

export const createUser = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://potenciar-solidario.onrender.com/users",
        user
      );
      dispatch({ type: CREATE_USER, payload: response });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const deleteUser = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `https://potenciar-solidario.onrender.com/users/${id}`
      );
      dispatch({ type: DELETE_USER, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const getUsers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://potenciar-solidario.onrender.com/users"
      );
      dispatch({ type: GET_USERS, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const getUserDetail = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://potenciar-solidario.onrender.com/users/${id}`
      );
      dispatch({ type: GET_USER_DETAIL, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const clearUserDetail = () => {
  return { type: CLEAR_USER_DETAIL };
};

export const updateUser = (id, updatedUserData) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `https://potenciar-solidario.onrender.com/users/${id}`,
        updatedUserData
      );
      dispatch({ type: UPDATE_USER, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};
