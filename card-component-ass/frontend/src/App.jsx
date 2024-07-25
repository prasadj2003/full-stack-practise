import { useEffect, useState } from "react"
import Card from "./components/Card"
import Form from "./components/Form"
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get("http://localhost:3000/users");
        setUsers(result.data)
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  })

  return (
    <>
      <Form />
      <div class="flex flex-wrap justify-around lg:flex-4 sm:flex-2">
        {users.map(user => (<Card name={user.name} age={user.age} city={user.city} followers={user.followers} likes={user.likes} photos={user.photos} />))}
      </div>
      
    </>
  )
}

export default App
