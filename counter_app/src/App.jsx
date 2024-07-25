import { useState } from "react"
// state, components

// todo app
// todo
// { todos: [{title: "todo1", description: "first todo", completed: true/false}]}

function App() {

  const [todos, setTodos] = useState([{
    title: "complete the cohort",
    description: "complete this thing in morning",
    completed: false
  }, {
    title: "Excersice",
    description: "morning run",
    completed: true
  }, {
    title: "Excersice",
    description: "morning run",
    completed: true
  }]);


  return (
    <div>
    <button onClick={() => setTodos([...todos, {title: "new todo", description: "new description"}])}>add todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}


// more of a component
function Todo(props) {
  return(
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </>
  )
}
export default App
