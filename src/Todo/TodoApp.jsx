import { useState } from "react";
import "./todo.css";
import Todo from "./Todo";

const TodoApp = () => {
    const [ tasks , setTasks ] = useState( [] );

 const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.task.value);
    let newTask = { todo : e.target.task.value }
    setTasks( [ ...tasks , newTask ] )
    e.target.reset();
 } 

  return (
    <div className="todoApp" >
        <form className="form" onSubmit={ handleSubmit } >
            <input type="text" name="task" placeholder="Enter your todo" required />
            <button type="submit" > Add </button>
        </form>
        <br />
        <div className="todo-items-div">
            <h3>Todo itmes </h3>
            <br />
            <ol>
            {
                tasks.length > 0 
                ?(
                   tasks.map(( task , i ) => <Todo task={task}  key={i} /> )
                ):(
                    <p>No Tasks</p>
                )
            }
            </ol>
        </div>
    </div>
  )
}

export default TodoApp