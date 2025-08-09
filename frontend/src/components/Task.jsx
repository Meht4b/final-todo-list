import React from 'react'
import CheckBox from './CheckBox'

const Task = ({task, toggleTask, toggleEdit,toggleComplete }) => {
  return (
    <div>
        <CheckBox toggleComplete={toggleComplete} currentStatus={task.completed} />
        <p>{task.title}</p>
    </div>
  )
}

export default Task
