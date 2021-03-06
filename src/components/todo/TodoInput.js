
import React, { useState } from "react";
import BasicBar from "components/BasicBar";

export default function TodoInput({ handleAddTodo }){
  const [todoTitle, setTodoTitle] = useState("");
  
  const handleChange = event => {
    setTodoTitle(event.target.value);
  }
  
  const submitTodo = () => {
    if(todoTitle && todoTitle.length > 0){
      handleAddTodo(todoTitle)
    }
}
const handleKeypress = event => {
  if(event.key === "Enter"){
    submitTodo()   
  }
}
  return (
    <BasicBar classes="input-bar rounded">
      <button aria-label="submit todo" onClick={submitTodo} className="circle-indicator"></button>
      <input aria-label="input todo title" className="input-bar__input" onKeyDown={handleKeypress} type="text" placeholder="Create a new todo" onChange={handleChange} />
    </BasicBar>
  )
}