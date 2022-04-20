import React from "react";
import useDispatch from 'react-redux';
import saveTodo from '../features/TodoList'
export const TodoForm = () => {
   
const [input, setInput] = useState('')
const dispatch = useDispatch()

const addTodo = () => {
    console.log('adding a todo')

    {saveTodo({
        item: input,
        done: false,
        id: Date.now()
    })}
}
return(
    <div>
    <input type="text" value={input} onChange={e=> setInput=target.value}/>
    <button onClick={addTodo}>Add</button>
    </div>

)}
