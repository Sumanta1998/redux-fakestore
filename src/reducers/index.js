import {
  productReducer,
  selectedProductReducer,
} from "../reducers/productReducer";

import { combineReducer } from "redux";

export const reducers = combineReducer({
  allProducts: productReducer,
  product: selectedProductReducer,
});
