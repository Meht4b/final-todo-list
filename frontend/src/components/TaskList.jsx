import { useState } from 'react'
import '../style/TaskList.css'
import CheckBox from './CheckBox';

function TaskList({tasks}) {

  

  return (
    <>
    <div className='TaskList'>
    <div className='tasks-cont'>
          
          {tasks && tasks.length> 0 && (
                ((task, index) => (
                  <>
                    <p key={index}>{task}</p>
                    <CheckBox/>
                  </>
                ))
            )
          }
        </div>
      </div>
      </>
    )
}
export default TaskList