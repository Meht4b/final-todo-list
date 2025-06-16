import { useState } from 'react'
import '../style/CreateTask.css'
import add from '../assets/add.png' 

function CreateTask({setCurrentTasks}) {

return (
    <>
    <div className='CreateTask-cont std-box'>
        <p>create new task</p>
        <button><img src={add} alt="" /></button>
    </div>
    </>
)
}
export default CreateTask