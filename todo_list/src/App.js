import React, {useState} from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  
  // Add the handlesubmit code here
  
  
  // Add the deleteToDo code here

  
  // Add the toggleComplete code here

  
  // Add the submitEdits code here

  
return(
<div className ="App">
<h1>Todo List</h1>
<form>
<input type ="text" align ="right" />
<button type ="submit">Add Todo</button>
</form>
</div>
);
};
export default App;
