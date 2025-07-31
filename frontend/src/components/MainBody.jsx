import { useState } from 'react'
import '../style/MainBody.css'
import DateChooser from './DateChooser'
import CreateTask from './CreateTask'
import TaskList from './TaskList'

function MainBody() {

    const [tasks, setTasks] = useState(["hello", "world", "this is a task"]);

    return (
        <>
            <div className='MainBody-cont'>
                <DateChooser/>

                <CreateTask />
                <TaskList tasks={tasks} />
            </div>
        </>
  )
}
export default MainBody 