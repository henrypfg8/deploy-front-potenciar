import {
  GET_ANSWERS,
  CREATE_ANSWER,
  UPDATE_ANSWER,
  DELETE_ANSWER,
} from "../action-types";

import axios from "axios";

export const getAnswers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://potenciar-solidario.onrender.com/answers"
      );
      dispatch({ type: GET_ANSWERS, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const createAnswer = (answer) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://potenciar-solidario.onrender.com/answers",
        answer
      );
      dispatch({ type: CREATE_ANSWER, payload: response.data });
      return Promise.resolve(response);
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
      return Promise.reject(error);
    }
  };
};

export const updateAnswer = (id, updatedAnswerData) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `https://potenciar-solidario.onrender.com/answers/${id}`,
        updatedAnswerData
      );
      dispatch({ type: UPDATE_ANSWER, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const deleteAnswer = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `https://potenciar-solidario.onrender.com/answers/${id}`
      );
      dispatch({ type: DELETE_ANSWER, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};
