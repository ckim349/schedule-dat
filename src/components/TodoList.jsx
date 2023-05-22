import React, {useState} from "react";
import TodoItem from "./TodoItem"

function TodoList({todos, toggleTodo, deleteTodo}) {

  return(
    <ul>
      {todos.length === 0 && "no todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}

export default TodoList