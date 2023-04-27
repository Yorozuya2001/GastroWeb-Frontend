import { BACKEND_URL, LOCAL_URL } from "../App";

export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const ORDER_RECIPES = "ORDER_RECIPES";
export const FILTER_RECIPES = "FILTER_RECIPES";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const FILTER_RECIPES_BY_DIETS = "FILTER_RECIPES_BY_DIETS";

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_URL}/recipes`);
      const data = await response.json();
      dispatch({
        type: GET_RECIPES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_URL}/diets`);
      const data = await response.json();

      dispatch({
        type: GET_DIETS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchRecipes = (recipe) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/recipes/name?search=${recipe}`
      );
      const data = await response.json();

      dispatch({
        type: SEARCH_RECIPE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderBy = (value) => {
  return {
    type: ORDER_RECIPES,
    payload: value,
  };
};

export const filterBy = (value) => {
  return {
    type: FILTER_RECIPES,
    payload: value,
  };
};

export const filterByDiets = (value) => {
  return {
    type: FILTER_RECIPES_BY_DIETS,
    payload: value,
  };
};

export const getRecipeById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_URL}/recipes/${id}`);
      const data = await response.json();

      dispatch({
        type: GET_RECIPE_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
    payload: null,
  };
};
