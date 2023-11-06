import {
  CREATE_POST,
  DELETE_POST,
  GET_POSTS,
  GET_POST_DETAIL,
  UPDATE_POST,
  SEARCH_POSTS,
  CLEAR_POST_DETAIL,
  //   GET_POSTS_BY_DATE,
  //   GET_POSTS_BY_CATEGORIES,
  //   GET_POSTS_BY_ONGS,
  GET_POSTS_FILTERED,
  SET_POSTS_FILTERS,
} from "../action-types";

import axios from "axios";
import unorm from "unorm";

//funcion que se usa en searchPosts()
const searchCoincidences = (string, subString) => {
  const normalizedString = unorm.nfkd(string).replace(/[\u0300-\u036F]/g, "");
  const normalizedSubString = unorm
    .nfkd(subString)
    .replace(/[\u0300-\u036F]/g, "");

  const regExp = new RegExp(normalizedSubString, "i");
  const coincidence = normalizedString.match(regExp);

  if (coincidence) return true;
  else return false;
};

///////////////
export const createPost = (post) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://potenciar-solidario.onrender.com/posts",
        post
      );
      console.log(response + "soy el response");
      dispatch({ type: CREATE_POST, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const deletePost = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `https://potenciar-solidario.onrender.com/posts/${id}`
      );
      dispatch({ type: DELETE_POST, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const getPosts = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://potenciar-solidario.onrender.com/posts"
      );
      dispatch({ type: GET_POSTS, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const getPostDetail = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://potenciar-solidario.onrender.com/posts/${id}`
      );
      dispatch({ type: GET_POST_DETAIL, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const updatePost = (id, updatePostData) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `https://potenciar-solidario.onrender.com/posts/${id}`,
        updatePostData
      );
      dispatch({ type: UPDATE_POST, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};

export const searchPosts = (posts, searchValue) => {
  try {
    const action = {
      type: SEARCH_POSTS,
      payload: [],
    };

    if (Array.isArray(searchValue)) {
      if (searchValue.includes(" ")) {
        searchValue = searchValue.filter((e) => e !== " ");
      }
      const searchedPosts = posts.filter(({ title, description, category }) => {
        for (let subString of searchValue) {
          if (
            searchCoincidences(title, subString) ||
            searchCoincidences(description, subString) ||
            searchCoincidences(category, subString)
          )
            return true;
        }
      });
      action.payload = searchedPosts;
    } else {
      const searchedPosts = posts.filter(({ title, description, category }) => {
        if (
          searchCoincidences(title, searchValue) ||
          searchCoincidences(description, searchValue) ||
          searchCoincidences(category, searchValue)
        )
          return true;
        else return false;
      });
      action.payload = searchedPosts;
    }

    return action;
  } catch (error) {
    console.log("Error al buscar posts:", error);
  }
};

export const clearPostDetail = () => {
  return { type: CLEAR_POST_DETAIL };
};

export const getPostsFiltered = (filters) => {
  const { category, ong, fromDate, untilDate } = filters;
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `https://potenciar-solidario.onrender.com/filters?category=${category}&ong=${ong}&fromDate=${fromDate}&untilDate=${untilDate}`
      );
      dispatch({
        type: GET_POSTS_FILTERED,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setPostsFilters = (postsFilters) => {
  return {
    type: SET_POSTS_FILTERS,
    payload: postsFilters,
  };
};