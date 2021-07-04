import { FETCH_POSTS, ADD_POST } from "../actions/types";

const initialState = [];

export default function posts(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.post];
    case FETCH_POSTS:
      return [...action.posts];
    default:
      return state;
  }
}
