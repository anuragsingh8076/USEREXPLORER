import { configureStore }  from "@reduxjs/toolkit";

import usersReducer from './usersSlice';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistReducer, persistStore } from "redux-persist";


const persistconfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistconfig, usersReducer);

export const store = configureStore({
  reducer: {
    users: persistedReducer,
  },
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;