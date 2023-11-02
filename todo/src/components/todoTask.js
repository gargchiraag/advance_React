import React from 'react'
import Inprocess from './inprocess'
import Completed from './completed'
const TodoTask = () => {
  return (
    <div className='mainStatus'>
        <Inprocess/>
        <Completed/>
    </div>
  )
}

export default TodoTask