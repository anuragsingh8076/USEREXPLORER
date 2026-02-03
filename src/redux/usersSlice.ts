import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {User} from '../types/User';

import {fetchUsersApi} from '../api/usersApi';


interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  page: number;
}


const initialstate: UsersState = {
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


