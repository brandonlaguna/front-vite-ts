import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
  totalCount: 0,
  currentPage: 1,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // Setear lista de posts
    setPosts: (state, action) => {
      state.posts = action.payload.posts || [];
      state.totalCount = action.payload.totalCount || 0;
      state.currentPage = action.payload.page || 1;
      state.error = null;
    },
    // Agregar un nuevo post
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
      state.totalCount += 1;
    },
    // Setear post actual (para detalles)
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
    // Actualizar un post
    updatePost: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post._id === action.payload._id
      );
      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...action.payload };
      }
    },
    // Eliminar un post
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.totalCount -= 1;
    },
    // Setear loading
    setPostsLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Setear error
    setPostsError: (state, action) => {
      state.error = action.payload;
    },
    // Limpiar posts
    clearPosts: (state) => {
      state.posts = [];
      state.currentPost = null;
      state.totalCount = 0;
      state.currentPage = 1;
    },
  },
});

export const {
  setPosts,
  addPost,
  setCurrentPost,
  updatePost,
  deletePost,
  setPostsLoading,
  setPostsError,
  clearPosts,
} = postsSlice.actions;

export default postsSlice.reducer;
