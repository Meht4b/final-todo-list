import { useState } from 'react'
import '../style/CreateTask.css'
import add from '../assets/add.png' 

function CreateTask({tasks,setTasks}) {

    


return (
    <>
    <div className='CreateTask-cont std-box'>
        <input type="text" placeholder='create new task' />
        <button><img src={add} alt="" /></button>
    </div>
    </>
)
}
export default CreateTask