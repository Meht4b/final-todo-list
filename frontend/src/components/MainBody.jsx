import { useState } from 'react'
import '../style/MainBody.css'
import DateChooser from './DateChooser'
import CreateTask from './CreateTask'
import TaskList from './TaskList'

function MainBody() {

    const [CurrentTasks,setCurrentTasks] = useState(1)

    return (
        <>
            <div className='MainBody-cont'>
                {CurrentTasks}
                <DateChooser/>
                <CreateTask setCurrentTasks={setCurrentTasks}/>
                <TaskList CurrentTasks={CurrentTasks}/>
            </div>
        </>
  )
}
export default MainBody 