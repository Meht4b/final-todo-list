import React from 'react'
import CheckBox from './CheckBox'
import '../style/Task.css'

const Task = ({task,fetchTasks }) => {

  ;

  return (
    <div className='task-item-cont'>
        <CheckBox task={task}  fetchTasks={fetchTasks} />
        <p>{task.task_desc}</p>
    </div>
  )
}

export default Task
