import React, { useState, useEffect } from 'react';
import './Todo.css'; // Import CSS file

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskContent, setNewTaskContent] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // Function to add a new task
    const addTask = () => {
        if (newTaskContent.trim() !== '') {
            const newTask = {
                id: Date.now(),
                content: newTaskContent,
                completed: false
            };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setNewTaskContent(''); // Clear input field after adding task

            // Update local storage with the updated tasks
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    };

    // Function to delete a task
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);

        // Update local storage with the updated tasks
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // Function to toggle task completion
    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);

        // Update local storage with the updated tasks
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div className="todo-container">
            <h1 className="todo-heading">Todo List</h1>
            {/* Add task input and button */}
            <input
                type="text"
                className="todo-input"
                value={newTaskContent}
                onChange={(e) => setNewTaskContent(e.target.value)}
                placeholder="Enter task..."
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTask();
                    }
                }}
            />
            <button className="addbutton" onClick={addTask}>Add Task</button>
            {/* Task list */}
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className="task-item">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id)}
                        />
                        {/* <span className={task.completed ? 'completed' : ''}>
                            {task.content}
                        </span> */}
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.content}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
















//   useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    //   }, [tasks]);

    // useEffect(() => {
    //     // Load tasks from local storage on component mount
    //     const storedTasks = localStorage.getItem('tasks');

    //     if (storedTasks) {
    //         try {
    //             const parsedTasks = JSON.parse(storedTasks);

    //             if (Array.isArray(parsedTasks) && parsedTasks.length > 0) {
    //                 console.log('Tasks loaded from local storage:', parsedTasks);
    //                 setTasks(parsedTasks);
    //             } else {
    //                 console.error('Invalid tasks data in local storage. Initializing with empty tasks array.');
    //                 setTasks([]);
    //             }
    //         } catch (error) {
    //             console.error('Error parsing tasks from localStorage:', error);
    //             setTasks([]);
    //         }
    //     } else {
    //         console.log('No tasks found in local storage. Initializing with empty tasks array.');
    //         setTasks([]);
    //     }
    // }, []); // Run only once on component mount
