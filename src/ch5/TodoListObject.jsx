import React from 'react'
import { useState } from 'react'

const TodoListObject = () => {
    const [task, setTask] = useState([
        {
            name: "test",
            status: "Incomplete"
        }
    ])
    const [newTask, setNewTask] = useState({
        name: '',
        status: "Complete"
    })
    const [change, setChange] = useState(null)
    const handleNameChage = (e) => {
        setNewTask({ ...newTask, name: e.target.value })
    }
    const handleStatusChange = (e) => {
        setNewTask({ ...newTask, status: e.target.value })
    }
    const addTask = () => {
        if (newTask.name.trim() === '') return
        setTask([...task, newTask])
        setNewTask({ name: '', status: "Incomplete" })
    }

    const editTask = (index) => {
        setChange(index)
        setNewTask(task[index])
    }
    const deleteTask = (index) => {
        const deleted = task.filter((t, i) => i !== index)
        setTask(deleted)
    }
    const saveEdit = () => {
        const saved = task.map((t, i) =>
            i === change ? newTask : t
        )
        setTask(saved)
        setChange(null)
        setNewTask({ name: '', status: "Incomplete" })
    }
    return (
        <div>

            <input type="text" placeholder='Enter Task' onChange={handleNameChage} value={newTask.name} />
            <br /><br />

            <select value={newTask.status} onChange={handleStatusChange}>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </select>
            <br /><br />


            {
                change === null ? (<button onClick={addTask}>Add</button>
                ) : (
                    <button onClick={saveEdit}>Update</button>

                )
            }


            <ul>

                {
                    task.map((item, index) => (
                        <li key={index}>

                            <span>{item.name}-{item.status}</span>
                            <button onClick={() => editTask(index)}>Edit</button>
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default TodoListObject