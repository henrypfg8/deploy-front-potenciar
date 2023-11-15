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
        "https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//answers",
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
        "https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//answers",
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
        `https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//answers/${id}`,
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
        `https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//answers/${id}`,
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
        "https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//answers/comments",
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
        `https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//answers/comments/${id}`,
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
        `https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//answers/comments/${id}`,
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
        "https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//answers/comments",
        config
      );
      dispatch({ type: GET_ANSWER_COMMENT, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};
