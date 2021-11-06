import { ActionTypes } from "../contants/actionTypes";
export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const selectedPost = (post) => {
  return {
    type: ActionTypes.SELECTED_POST,
    payload: post,
  };
};
