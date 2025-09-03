import React, { use, useState } from 'react'
import emptyCheck from '../assets/stop.png'
import filledCheck from '../assets/tick-square.png'
import '../style/CheckBox.css'

const CheckBox = ({task, fetchTasks}) => {

  const [checked, setChecked] = useState(false);

const toggleStatus = async () => {
    console.log('h')
    const url = "https://final-todo-list.onrender.com/update_task";
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      },
      body: JSON.stringify({
        task_id: task.id,
        task_desc: task.task_desc,
        task_status: !task.task_status
      })
    }
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      console.log("task status updated");
      fetchTasks();
    } else {
      console.log("error updating task status");
      console.log(data);
    }

  }
  return (
    <>
      <div className='checkbox-cont'>
          <img src={emptyCheck} alt="" onClick={() => toggleStatus()} className='checkbox-bg'/>
          <img src={filledCheck} alt="" className={task.task_status ? 'box-checked' : 'box-unchecked'} onClick={() => toggleStatus()} />
      </div>


    </>
  )
}

export default CheckBox
