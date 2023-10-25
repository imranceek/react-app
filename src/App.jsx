import { useState } from 'react'
import Title from './components/Title'
import TodosList from './components/TodosList'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1, 
      title: "Cleaning rooms",
      completet: false,
    },
    {
      id: 2, 
      title: "Doing home work ",
      completet: true,
    },
    {
      id: 3, 
      title: "Reading books",
      completet: false,
    }
  ])

    


  return(
    <div>
      <Title/>
      <TodosList todos={todos} setTodos={setTodos}/>
      
    </div>
  )


}

export default App
