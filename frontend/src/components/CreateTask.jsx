import React from 'react'
import {v4 as uuidv4} from 'uuid';
uuidv4();
import '../style/CreateTask.css'
import add from '../assets/add.png'

const CreateTask = ({addTask}) => {

    const [value,setValue] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
    };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='create-task-form'>

        <input id='title' name='title' placeholder='Create new tasks' className='create-task-input' type="text" value={value} onChange={(e) => {setValue(e.target.value);console.log(value) }}/>
        
        <button className='create-task-submit' type="submit" onClick={() => {addTask({id: uuidv4(), title: value, isCompleted: false, isEditing: false})}}><img src={add}/></button>

    </form>
  )
}

export default CreateTask
