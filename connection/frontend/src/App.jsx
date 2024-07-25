import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await axios.get("https://sum-server.100xdevs.com/todos");
        console.log(res.data); // Log response data to check its structure
        setTodos(res.data.todos); // Access the todos array correctly
      } catch (error) {
        console.error("Error fetching todos: ", error);
        setError("Failed to fetch todos");
      } finally {
        setLoading(false);
      }
    }

    // Initial fetch
    fetchTodos();

    // Set up interval to fetch todos every 10 seconds
    const intervalId = setInterval(fetchTodos, 10000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {Array.isArray(todos) && todos.length > 0 ? (
        todos.map((todo, index) => (
          <div key={index}>
            <h2>{todo.id}</h2>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <h4>{todo.completed.toString()}</h4>
          </div>
        ))
      ) : (
        <div>No todos available</div>
      )}
    </div>
  );
}

export default App;
