import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  //  Add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  //  Toggle completed status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //  Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
  {todos.map((todo) => (
    <li
      key={todo.id}
      onClick={() => toggleTodo(todo.id)}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {todo.text}
      {/* Stop click event from bubbling to <li> */}
      <button
        onClick={(e) => {
            // Prevent toggle when deleting
          e.stopPropagation(); 
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default TodoList;
