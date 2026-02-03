import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {User} from '../types/User';

import {fetchUsersApi} from '../api/usersApi';


interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  page: number;
}


const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
};


export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (page: number) => {
    return await fetchUsersApi(page, 10);
  },
);


const usersSlice = createSlice ({
  name: 'users',
  initialState,
  reducers: {
    clearUsers: state => {
      state.users = [];
      state.page =1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.push(...action.payload);
        state.page += 1;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.error = 'Failed to load users';
        state.loading = false;
      });
  },
});

export const {clearUsers} = usersSlice.actions;
export default usersSlice.reducer;