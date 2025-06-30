//import './App.css'
import Input from "./input.jsx"
import Card from "./card.jsx"
import { useEffect, useState } from 'react'

const initialTask = [
    { text: "My First Task", id: 0 },
    { text: "My Second Task", id: 1 },
    { text: "My Third Task", id: 2 },
]

const Task = () => {

    const [TaskList, setTaskList] = useState(initialTask);

    const handleNewTask = (newTask) => {
        setTaskList((prev) => {
            return [...prev, newTask]                                  //... => spread operrator
        })
    };
    const handleDelete = (id) => {
        setTaskList((prev) => prev.filter(task => task.id != id))
    };

    const handleGetTask = async () => {
        const response = await fetch("http://localhost:8010"); //connect to backend
        const data = await response.json();  //convert to json
        console.log(data);
    };

    useEffect(() => {   //hook
        handleGetTask();
    }, []  //empty array(calls useEffect when start running)
    );

    return (

        <>

            <header>My Todo List</header>
            <div id='tasks'>
                <Input onAddTask={handleNewTask} />
                {
                    TaskList.map((task) => {
                        return (
                            <Card props={task} onDelete={handleDelete} />
                        );
                    })}
            </div>

        </> //fragmrent
    )
}
export default Task;