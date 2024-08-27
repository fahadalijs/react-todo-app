import { useState , useRef  } from "react"

const App = () =>{
  const [todo , setTodo] = useState([])
  const todoVal = useRef()

  const addTodo = (event) =>{
    event.preventDefault();
  console.log(todoVal.current.value);
  todo.push(todoVal.current.value);
  setTodo([...todo])
  console.log(todo);
  todoVal.current.value = " "
}

const deleteTodo = (index)=>{
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    setTodo([...todo]);
}



const editTodo = (index) =>{
    console.log("edit todo" , index);
    const editedVal = prompt("Enter value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
}
  

  

  return (
    <>
    <h1>React Todo App</h1>
    <form onSubmit={addTodo}>
      
      <input type="text" placeholder="Enter todo" ref={todoVal}/> <br /> <br />
      <button  type="submit">click</button>
      </form>


      <ul>
        {todo.map((item , index) =>{
        return <div key={index}>
         <li>{item}</li>
         <button onClick={() => deleteTodo(index)}>Delete</button>
         <button onClick={() => editTodo(index)}>Edit</button>



            </div>
            
          })}
      </ul>

    </>
  )
}

export default App




































