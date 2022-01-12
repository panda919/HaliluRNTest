import { combineReducers } from '@reduxjs/toolkit';

import toToListReducer from '@modules/todoList/slice';

const rootReducer = combineReducers({
  todoList: toToListReducer,
});

export default rootReducer;
