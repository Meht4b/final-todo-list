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

    React.useEffect(() => {
        fetchTasks();
        const interval = setInterval(fetchTasks, 5000);
        return () => clearInterval(interval);
    }, []);

    const fetchTasks = async () => {
        const url = "https://final-todo-list.onrender.com/get_tasks";
        const token = sessionStorage.getItem("token");
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        if (response.ok) {
            console.log(data.tasks);
            setTasks(data.tasks);
        } else {
            console.log("error fetching tasks");
            console.log(data);
        }
    }

    

return (
    <>
            <div className="todo-wrapper">
                    <DateChooser currentDate={currentDate} incrementDate={incrementDate} decrementDate={decrementDate} />
                    <CreateTask fetchTasks={fetchTasks} currentDate={currentDate}/>
                    {
                            tasks
                                    .filter(task => {
                                            const taskDate = new Date(task.timestamp);
                                            taskDate.setHours(0, 0, 0, 0);
                                            return taskDate.getTime() === currentDate.getTime();
                                    })
                                    .map((task, index) => (
                                            <Task key={index} task={task} fetchTasks={fetchTasks} />
                                    ))
                    }
            </div>
    </>
)
}

export default ToDoWrapper
