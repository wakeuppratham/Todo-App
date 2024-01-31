import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodoList.css'; // Import CSS file

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get('http://localhost:3000/api/v1/getTodos')
      .then(response => {
        setTodos(response.data.data);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/v1/createTodo', { title, description })
      .then(() => {
        fetchTodos(); // Fetch todos again to update the list
        setTitle(''); // Clear the input fields after submission
        setDescription('');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Note</button>
      </form>
      <div className="row">
        {todos.map(todo => (
          <div key={todo._id} className="todo">
            <div className="note">
              <strong>{todo.title}</strong>: {todo.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
