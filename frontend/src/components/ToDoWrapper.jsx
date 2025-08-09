import React,{useState} from 'react'
import DateChooser from './DateChooser.jsx'
import CreateTask from './CreateTask.jsx'
import Task from './Task.jsx'

const ToDoWrapper = () => {

    const [currentDate, setcurrentDate] = useState(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return today;
    });
    const [tasks, setTasks] = useState([]);

    const incrementDate = () => {
        const nextDate = new Date(currentDate);
        nextDate.setDate(nextDate.getDate() + 1);
        setcurrentDate(nextDate);
    }

    const decrementDate = () => {
        const nextDate = new Date(currentDate);
        nextDate.setDate(nextDate.getDate() - 1 );
        setcurrentDate(nextDate);
    }

    const addTask = (task) => {
        console.log(task);
        if (task.title.trim() === '') {
            return;
        }
        setTasks([...tasks, { ...task, date: currentDate }]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const toggleEdit = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isEditing: !task.isEditing };
            }
            return task;
        }));
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted };
            }
        }))
    }

  return (
    <>
        <div className="todo-wrapper">
            <DateChooser currentDate = {currentDate} incrementDate = {incrementDate} decrementDate = {decrementDate} />
            <CreateTask addTask={addTask} />
            {
                tasks.filter(task => task.date.toDateString() === currentDate.toDateString())
                    .map((task, index) => (
                        <Task key={index} task={task} deleteTask = {deleteTask} toggleEdit = {toggleEdit} toggleComplete = {toggleComplete} />
                    ))
            }
            
        </div>
    </>
  )
}

export default ToDoWrapper
