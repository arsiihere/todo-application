import React, { useState } from "react";
import TodoContext from "./todo-context";

export default function TodoConTextProvider(props) {
  const [allTodo, setAllTodo] = useState([]);

  const addTodoHandler = (todo) => {
    setAllTodo([...allTodo, todo]);
  };

  const updateTodoHandler = (todo) => {
    const todoIndex = allTodo.findIndex((el) => el.id === todo.id);
    const newStateSnapshot = allTodo;
    newStateSnapshot[todoIndex].name = todo.name;
    setAllTodo(newStateSnapshot);
  };

  const deleteTodoHandler = (todoId) => {
    setAllTodo(allTodo.filter((todoItem) => todoItem.id != todoId));
  };

  const ctx = {
    allTodos: allTodo,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
    updateTodo: updateTodoHandler,
  };
  return (
    <TodoContext.Provider value={ctx}>{props.children}</TodoContext.Provider>
  );
}
