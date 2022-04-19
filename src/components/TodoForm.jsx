import { useEffect, useState } from "react";


export const TodoForm = (props) => {
   
const [todo, setTodo] = useState([
{Date: "Date", Time: "Time", Task: "Task"},
{Date: "Date", Time: "Time", SpecialTask: "Specail Task"} 
]);
  
const addTodo = e => {
    const {Date, Time, Task, Dvalue, Tvalue, TaskValue} = e.target;
    setTodo({
        ...todo,
        [Date]: Dvalue,
        [Time]: Tvalue,
        [Task]: TaskValue,

    });
};


}
