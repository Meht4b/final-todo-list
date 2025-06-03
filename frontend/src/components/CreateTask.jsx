import { useState } from 'react'
import '../style/CreateTask.css'


function CreateTask({setCurrentTasks}) {

return (
    <>
            <div className='CreateTask'>
                    <button onClick={() => setCurrentTasks(prev => prev + 1)}>set</button>
            </div>
    </>
)
}
export default CreateTask