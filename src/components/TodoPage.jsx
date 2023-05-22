import React, { useState, useEffect } from 'react';
import CreateTodoForm from "./CreateTodoForm";
import TodoList from "./TodoList";

function TodoPage() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("ITEMS")) || []
  );
 
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  
  function addTodo(title) {
    setTodos(currentTodos => {
      return[
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title, 
          completed: false
        }
      ]});
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          return {...todo, completed};
        }
        return todo;
      })
    });
  };

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(
        todo => todo.id !== id
        );
    });
  };


  return (
    <div>
      {/* <button onClick={}>Go to schedule</button> */}
      <h1>Add a task</h1>
      <CreateTodoForm 
        addTodo={addTodo}
      />
      <h1>todos</h1>
      <TodoList 
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default TodoPage
