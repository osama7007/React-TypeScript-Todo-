import "./input.css"

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent<EventTarget>)=>void;
}
const InputField: React.FC<Props> = ({todo , setTodo , handleAdd}) => {

  console.log(todo)
  return (
    <div>
        <form className='input_form ' onSubmit={(e)=>handleAdd(e)}>
        <input
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        type="text" placeholder="Enter The Task"/>
        <button>Add</button>
        </form> 
    </div>
  )
}

export default InputField