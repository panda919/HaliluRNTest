/* eslint-disable @typescript-eslint/no-explicit-any */
import { createDraftSafeSelector } from "@reduxjs/toolkit";
import {ToDoListStateType} from './slice'
import { StateType } from '@store/store';

export const selectTodoListSate = (state: StateType):ToDoListStateType => state.todoList;

const toDoListSelector = createDraftSafeSelector(
  selectTodoListSate,
  ( {toDoList} ) => toDoList
);

export { toDoListSelector };
