import {
  GET_ANSWERS,
  CREATE_ANSWER,
  UPDATE_ANSWER,
  DELETE_ANSWER,
  CREATE_ANSWER_COMMENT,
  DELETE_ANSWER_COMMENT,
  UPDATE_ANSWER_COMMENT,
  GET_ANSWER_COMMENT,
} from "../action types/answersActionTypes.js";

import axios from "axios";
import { configureHeaders } from "../auth/configureHeaders .js";

export const getAnswers = () => {
  return async function (dispatch) {
    try {
      const config = configureHeaders();
      const response = await axios.get(
        "https://potenciar-solidario.onrender.com/answers",
        config
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
      const config = configureHeaders();
      const response = await axios.post(
        "https://potenciar-solidario.onrender.com/answers",
        answer,
        config
      );
      dispatch({ type: CREATE_ANSWER, payload: response.data });
      return Promise.resolve(response);
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
      return Promise.reject(error);
    }
  };
};

export const updateAnswer = (id, answer) => {
  return async function (dispatch) {
    try {
      const config = configureHeaders();
      const response = await axios.put(
        `https://potenciar-solidario.onrender.com/answers/${id}`,
        answer,
        config
      );
      dispatch({ type: UPDATE_ANSWER, payload: response.data });
      return Promise.resolve(response);
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
      return Promise.reject(error);
    }
  };
};

export const deleteAnswer = (id) => {
  return async function (dispatch) {
    try {
      const config = configureHeaders();
      const response = await axios.delete(
        `https://potenciar-solidario.onrender.com/answers/${id}`,
        config
      );
      dispatch({ type: DELETE_ANSWER, payload: response.data });
      return Promise.resolve(response);
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
      return Promise.reject(error);
    }
  };
};

export const createAnswerComment = (comment) => {
  return async function (dispatch) {
    try {
      console.log(comment);
      const config = configureHeaders();
      const response = await axios.post(
        "https://potenciar-solidario.onrender.com/answers/comments",
        comment,
        config
      );
      dispatch({ type: CREATE_ANSWER_COMMENT, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const deleteAnswerComment = (id) => {
  return async function (dispatch) {
    try {
      const config = configureHeaders();
      const response = await axios.delete(
        `https://potenciar-solidario.onrender.com/answers/comments/${id}`,
        config
      );
      dispatch({ type: DELETE_ANSWER_COMMENT, payload: response.data });
      return Promise.resolve(response);
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
      return Promise.reject(error);
    }
  };
};

export const updateAnswerComment = (id, thread) => {
  return async function (dispatch) {
    try {
      const config = configureHeaders();
      const response = await axios.put(
        `https://potenciar-solidario.onrender.com/answers/comments/${id}`,
        thread,
        config
      );
      dispatch({ type: UPDATE_ANSWER_COMMENT, payload: response.data });
      return Promise.resolve(response);
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
      return Promise.reject(error);
    }
  };
};

export const getAnswerComment = () => {
  return async function (dispatch) {
    try {
      const config = configureHeaders();
      const response = await axios.get(
        "https://potenciar-solidario.onrender.com/answers/comments",
        config
      );
      dispatch({ type: GET_ANSWER_COMMENT, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};
