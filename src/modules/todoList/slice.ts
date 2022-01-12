
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _, { initial } from 'lodash';

 import {ToDoItem} from '@models/todoItem'

export type ToDoListStateType = {
  toDoList: ToDoItem[];
};



export const INITIAL_STATE: ToDoListStateType = {
  toDoList: [],
};


export type AddItemActionType = PayloadAction<ToDoItem>;
export type UpdateItemActionType = PayloadAction<ToDoItem>;
export type RemoveItemActionType = PayloadAction<string>;


const todoListSlice = createSlice({
  name: 'todoList',
  initialState: INITIAL_STATE,
  reducers: {
    addItem(state, action: AddItemActionType) {
      const prevData = state.toDoList
      state.toDoList = _.concat(prevData, action.payload);
    },

    updateItem(state, action: UpdateItemActionType) {
      const prevData = state.toDoList;
      state.toDoList = _.map(prevData, item => item.id === action.payload.id ?action.payload : item);     
    },
    removeItem(state,action: RemoveItemActionType) {
      const prevData = state.toDoList;
      state.toDoList = _.filter(prevData, item => item.id !== action.payload );
    },
    clearList(state) {
      state.toDoList = []
    },   
  },
});

export const { addItem, updateItem, removeItem,clearList } =
todoListSlice.actions;

export default todoListSlice.reducer;