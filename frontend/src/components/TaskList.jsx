import { useState } from 'react'
import '../style/TaskList.css'


function TaskList({CurrentTasks}) {

  return (
    <>
    <div className='TaskList'>
        {CurrentTasks}
    </div>
    </>
  )
}
export default TaskList