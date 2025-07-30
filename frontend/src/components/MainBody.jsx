import { useState } from 'react'
import '../style/MainBody.css'
import DateChooser from './DateChooser'
import CreateTask from './CreateTask'
import TaskList from './TaskList'
import Task from './Task'

function MainBody() {

    const [tasks, setTasks] = useState([]);

    return (
        <>
            <div className='MainBody-cont'>
                <DateChooser/>

                <CreateTask />
                <TaskList />
                <Task/>
            </div>
        </>
  )
}
export default MainBody 