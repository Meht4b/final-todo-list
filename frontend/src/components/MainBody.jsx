import { useState } from 'react'
import '../style/MainBody.css'
import DateChooser from './DateChooser'
import CreateTask from './CreateTask'
import TaskList from './TaskList'
import Task from './Task'

function MainBody() {

    const [CurrentTasks,setCurrentTasks] = useState(1)

    return (
        <>
            <div className='MainBody-cont'>
                <DateChooser/>

                <CreateTask setCurrentTasks={setCurrentTasks}/>
                <TaskList CurrentTasks={CurrentTasks}/>
                <Task/>
            </div>
        </>
  )
}
export default MainBody 