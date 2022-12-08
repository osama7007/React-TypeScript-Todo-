import './App.css';
import InputField from './componenets/Input Field';
import React , {useState} from "react";
import { Todo } from './model';
import TodoList from './componenets/to do list';
const App: React.FC =()=> {
  const [todo, setTodo] = useState<string>("");
  const [todos , setTodos] = useState<Todo[]>([]);

  const handleAdd =(e:React.FormEvent<EventTarget> )=>{
    e.preventDefault();
    todo && setTodos([...todos , {id: Date.now(), todo:todo , isDone: false}]);
    setTodo("")
  }
  console.log(todos);
  return (
    <div className="App">
     <h1 className='heading' >Tasks</h1>
     <InputField todo={todo}  setTodo={setTodo} handleAdd={(e:React.FormEvent<EventTarget>)=>handleAdd(e)}/>
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
