import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

// Retrieve todo items from localStorage if available
const items = typeof window !== 'undefined' && localStorage.getItem("todoItems") !== null
  ? JSON.parse(localStorage.getItem("todoItems"))
  : [];

const initialState = {
  todo: items,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newTodo = { 
        title: action.payload.inputTitle, 
        description: action.payload.inputDescription, 
        id: uuidv4() 
      };
      state.todo.push(newTodo); 
      localStorage.setItem("todoItems", JSON.stringify(state.todo)); 
    },

    removeToDo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
      localStorage.setItem("todoItems", JSON.stringify(state.todo));
    },

    editToDo: (state, action) => {
      const { id, newTitle, newDescription } = action.payload;
      const itemIndex = state.todo.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.todo[itemIndex].title = newTitle;
        state.todo[itemIndex].description = newDescription;
      }
      localStorage.setItem("todoItems", JSON.stringify(state.todo));
    },

    clearToDo: (state) => {
      state.todo = [];
      localStorage.setItem("todoItems", JSON.stringify(state.todo));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToDo, removeToDo, editToDo, clearToDo } = todoSlice.actions;

export default todoSlice.reducer;
