import { FETCH_POSTS, ADD_POST } from "./types";

// ACTIONS
export function fetchPostsAction(posts) {
  return {
    type: FETCH_POSTS,
    posts,
  };
}

export function addPostAction(post) {
  return {
    type: ADD_POST,
    post,
  };
}

// DISPATCHERS
export const fetchPosts = () => async (dispatch) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return dispatch(fetchPostsAction(posts));
};

export const addPost = (post) => async (dispatch) => {
  return dispatch(addPostAction(post));
};
