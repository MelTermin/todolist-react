import React from 'react'
import {useState} from 'react'
import TodoList from "./TodoList";

function App() {
const [titleText, setTitleText]= useState("");
const [inputText,setInputText]= useState("");
const [todos,setTodos]= useState([]);
const setInputTextHandler= (e) => {
//console.log(e.target.value);//
setInputText(e.target.value);
}
const setTitleTextHandler =(e) => {
setTitleText (e.target.value)
}
const submitTodoHandler= (e) => {
e.preventDefault();
setTodos([
...todos,
{ id:Math.floor(Math.random()*1000),
title:titleText,
text:inputText,
createdDate: Date.now() }
]);
setInputText("");
setTitleText("");
}
return (
<div >
<div className="container">
<p className="project-name">Todo List</p>
<p className="main-text">Title</p>
<input  className="title-input" type="text" placeholder="Optional..." onChange={setTitleTextHandler } value={titleText} ></input>
<br></br>
<input className="title-input" type="text" placeholder="Please type a todo..." onChange={setInputTextHandler } value={inputText}></input>
<br></br>
<button className="btn" onClick={submitTodoHandler} >Add</button>
</div>
<TodoList todos= {todos} setTodos= {setTodos} ></TodoList>
</div>
  );
}
export default App;