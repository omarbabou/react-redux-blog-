import { combineReducers } from "redux";
import { postReducer, selectedPostReducer } from "./postReducer";

const reducers = combineReducers({
  allposts: postReducer,
  posts: selectedPostReducer,
});

export default reducers;
