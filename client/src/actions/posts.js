import * as api from "../api/index.js";
import {
  LIKE,
  DELETE,
  UPDATE,
  CREATE,
  FETCH_ALL,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: CREATE, payload: post });
    const data = await api.createPost(post);
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE, payload: id });
    await api.deletePost(id);
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: LIKE, payload: id });
    const { data } = await api.likePost(id);
  } catch (error) {
    console.log(error);
  }
};
