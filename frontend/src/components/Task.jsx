import React from 'react'
import CheckBox from './CheckBox'
import '../style/Task.css'

const Task = ({task }) => {

  ;

  return (
    <div className='task-item-cont'>
        <CheckBox isCompleted={task.isCompleted}  id = {task.id} />
        <p>{task.title}</p>
    </div>
  )
}

export default Task
