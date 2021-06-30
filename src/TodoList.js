
import React from 'react'
import {useState} from 'react'
import Background from "./Background";
function TodoList({todos, setTodos}) {
const [editTitle,setEditTitle]= useState("");
const [editText,setEditText]= useState("");
const [modalIsOpen, setModalIsOpen] = useState(null);
const handleDelete= (id)=> {
//console.log(id)//
if (window.confirm("Are you sure you want to delete your note?")){
const newList = todos.filter((todo) => todo.id !== id);
setTodos(newList);
}
}
const handleEdit = (id) => {
const newList= todos.map((todo) => {
  if (todo.id === id) {
todo.text = editText;
todo.title = editTitle;
todo.createdDate= new Date ().toLocaleDateString("en-US",{
  hour:"2-digit",
  minute:"2-digit",
   })
}
return todo;
});
setTodos(newList);
setEditTitle("");
setEditText("");
setModalIsOpen(null)
}
return (
<div >
<ul className="todo-list" >
{ todos.map((todo) => (
<li className="dot"  key={todo.id}>
{modalIsOpen===todo.id ? (
<div  >
<form className="modal" >
<p className="modal-title">Edit Todo List</p>
<p>Title:</p>
<input className="modal-input" placeholder="Optional..." type="text" value={editTitle}  onChange={(e) => setEditTitle(e.target.value)} ></input>
<input  className="modal-input"
placeholder="Please edit..." value={editText} onChange={(e) => setEditText(e.target.value)} ></input>
<br></br>
<br></br>
<p>{new Date ().toLocaleDateString("en-US",{
hour:"2-digit",
minute:"2-digit",
 })}</p>
<button  className="btn-edit" type="submit" onClick={() => handleEdit(todo.id)} ><i className="fas fa-edit" ></i> Edit</button>
</form>
<Background></Background>
</div>
): (
<div className="item-container" >
<p  className="title">{todo.title}</p>
<p  className="text-box"> {todo.text}</p>
<br></br>
<p>{new Date (todo.createdDate).toLocaleDateString("en-US",{
hour:"2-digit",
minute:"2-digit",
 })}</p>
<div className="button-wrapper">
 <button className="delete-btn" type="button"  onClick={() => handleDelete(todo.id)}>Delete </button>
 <button type="button" className="btn-modal"  onClick= {() =>setModalIsOpen(todo.id)} >Modal </button>
 </div>
 </div>)
 }
</li>
))}
</ul>
</div>
)
}
export default TodoList