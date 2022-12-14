import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_SATE = {
  categories: [],
};

const categoryReducer = (state = INITIAL_SATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
