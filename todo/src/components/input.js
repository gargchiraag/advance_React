import React from 'react'
import './taskStatus.css'
const Input = () => {
  return (
    <div id='inputDiv'>
        <input type='text' placeholder='Enter your Task'/>
        <button onClick={()=>{alert("Task!!!")}}>Add</button>
    </div>
  )
}

export default Input