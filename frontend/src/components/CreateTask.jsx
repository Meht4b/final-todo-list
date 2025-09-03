import React from 'react'
import {v4 as uuidv4} from 'uuid';
uuidv4();
import '../style/CreateTask.css'
import add from '../assets/add.png'

const CreateTask = ({fetchTasks}) => {

    const [value,setValue] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = value.trim();
        if (newTask.length > 0) {
          const url = "https://final-todo-list.onrender.com/create_task";
          const token = sessionStorage.getItem("token");
          console.log("Token:", token); // Debugging line to check the token value
          const options = {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "authorization": "Bearer " + token
              },
              body: JSON.stringify({
                task_desc: newTask,
                task_status: false
              }),
          };
              
          const response = await fetch(url, options);
          const data = await response.json();
          if (response.ok) {
            console.log("Task added successfully");
          } else {
            console.log("error creating task");
            console.log(data);
          }

        
        }
        setValue('');
        fetchTasks();
      }
    

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='create-task-form'>

        <input id='title' name='title' placeholder='Create new tasks' className='create-task-input' type="text" value={value} onChange={(e) => {setValue(e.target.value);console.log(value) }}/>
        
        <button className='create-task-submit' type="submit" ><img src={add}/></button>

    </form>
  )
}

export default CreateTask
