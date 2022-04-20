import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

const TodoList = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload)
    }
  }
});

export const {} = TodoList.actions

export default TodoList.reducer