import React, { useState } from "react"

function CreateTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleChange(event) {
    setNewItem(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    addTodo(newItem)

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo"></label>
        <input 
          type="text" 
          id="todo"
          value={newItem}
          onChange={handleChange}
          placeholder="add a task"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}

export default CreateTodoForm