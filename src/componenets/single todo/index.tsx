import "./single_todo.css";
import { AiFillDelete ,AiFillEdit } from 'react-icons/ai';
import { MdDownloadDone } from 'react-icons/md';
import { Todo } from "../../model";
import { useState } from "react";

interface Props{
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo , todos , setTodos}:Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDoneFunction =(id:number)=>{
      setTodos(todos.map(todo=> {
        return(todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
      }))
  }
  
  const handleDeleteFunction =(id:number)=>{
      setTodos(todos.filter(todo=> {
        return( todo.id !== id)
      }))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <form className="singleTodo" 
    onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {
        edit ? (
          <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos_single_input"
          />
        ) : todo.isDone ? (
          <s className="Single_todo_text" style={{color:"gray"}}>{todo.todo}</s>
        ) : (
          <span className="Single_todo_text">{todo.todo}</span>
        )
      }
        <div>
            <span className="icon edit" title="Edit" 
            onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}><AiFillEdit /></span>
            <span className="icon done" title="Done" onClick={()=>handleDoneFunction(todo.id)}><MdDownloadDone /></span>
            <span className="icon delete" title="Delete" onClick={()=>handleDeleteFunction(todo.id)}><AiFillDelete /></span>
        </div>
    </form>
  )
}

export default SingleTodo