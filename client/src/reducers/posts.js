import {
  LIKE,
  DELETE,
  UPDATE,
  CREATE,
  FETCH_ALL,
} from "../constants/actionTypes";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => {
        return post._id === action.payload._id ? action.payload : post;
      });
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload
          ? { ...post, likeCount: post.likeCount + 1 }
          : post
      );
    default:
      return posts;
  }
};

export default reducer;
