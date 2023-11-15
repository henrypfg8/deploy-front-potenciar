import { GET_ONGS } from "../action types/ongAndCategoriesActionTypes.js";

import axios from "axios";
import { configureHeaders } from "../auth/configureHeaders .js";

export const getOngs = () => {
  return async function (dispatch) {
    try {
      const config = configureHeaders();
      const response = await axios.get(
        "https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//ongs",
        config
      );
      dispatch({ type: GET_ONGS, payload: response.data });
    } catch (error) {
      console.log(error, "por favor contactar a soporte por este error");
    }
  };
};
