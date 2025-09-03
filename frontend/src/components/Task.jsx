import React from 'react'
import CheckBox from './CheckBox'
import '../style/Task.css'

const Task = ({task }) => {

  ;

  return (
    <div className='task-item-cont'>
        <CheckBox isCompleted={task.task_status} id = {task.id} />
        <p>{task.task_desc}</p>
    </div>
  )
}

export default Task
