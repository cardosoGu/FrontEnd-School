import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../services/axios';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //eslint-disable-line

export const loginUser = createAsyncThunk('auth/login', async (_, thunkAPI) => {
  try {
    // req to BackEnd Async
    return undefined;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data.message);
  }
});
