import { CATEGORY_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/redux.utils";

export const setCategories = (categories) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categories);
