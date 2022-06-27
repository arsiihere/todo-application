import React, { createContext, createRef } from "react";

const TodoContext = createContext({
  allTodos: [],
  addTodo: (todo) => {},
  updateTodo: (todo) => {},
  deleteTodo: (todoId) => {},
  isLoggedIn: false,
});

export default TodoContext;
