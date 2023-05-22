import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    loaded: false,
    error: undefined,
    posts: [],
    editingPost: undefined
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload)
    },
    removePost: (state, action) => {
      state.posts.splice(action.payload, 1)
    },
    setEditingPost: (state, action) => {
      // {title, body, index}
      state.editingPost = action.payload
    },
    editPost: (state, action) => {
      // {title, body, index}
      const { index, ...post } = action.payload;
      state.posts[index] = post;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
      state.loaded = false;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.error = undefined;
      state.loaded = true;
      state.loading = false;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.payload;
      state.posts = [action.payload];
      state.loaded = true;
      state.loading = false;
    })
  }

})

// Action creators are generated for each case reducer function
export const { addPost, removePost, setEditingPost, editPost, } = postsSlice.actions

export default postsSlice.reducer