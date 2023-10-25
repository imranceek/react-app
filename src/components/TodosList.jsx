import React from "react"

function TodosList({todos, setTodos}){

    


    const handleDelete = (id) => {
    const filteredEvents = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(filteredEvents)
}   


    return(
        <ul>
            {todos.map((todo) =>{
                return <li key={todo.id}>
                    <h3>{todo.title}</h3>
                    <button onClick={() => handleDelete(todo.id)}>delete</button>
                </li>
            })}
        </ul>
    )
}

export default TodosList