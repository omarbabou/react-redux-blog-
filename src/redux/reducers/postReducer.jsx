import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  posts: [],
};
export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};

export const selectedPostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_POST:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default postReducer;
