import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import Reactotron from './ReactotronConfig';


import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { ToDoListStateType } from '@modules/todoList/slice';
export type StateType = {
  todoList: ToDoListStateType;
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // timeout: 0,
  version: 1,
};

const devMode = __DEV__;
const enhancers = [];
if (devMode) {
    //  middleware.push(logger);
    enhancers.push(Reactotron.createEnhancer!());
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [
  ...getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
    immutableCheck: {
      warnAfter: 600,
    },
  }),
  thunk,
];
const store = configureStore({
  reducer: persistedReducer,
  devTools: devMode,
  middleware,
  enhancers,
});
const persister: Persistor = persistStore(store);
export function getPersister(): Persistor {
  return persister;
}
export { store, persister };
