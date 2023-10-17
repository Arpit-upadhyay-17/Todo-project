import React, { useState } from 'react'

const Todo = ({task }) => {
    const [ complete , setComplete ] = useState(false);
    const handleClick = () => {
        setComplete(true);
    }
  return (
    <div className='item-div' >
        <li style={{ textDecoration : complete ? "line-through" : "none" }} >  <b> { task.todo } </b> </li>
        <button onClick={handleClick} > completed </button>
    </div>
  )
}

export default Todo;