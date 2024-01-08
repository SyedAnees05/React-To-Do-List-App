import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState(" ");

  const addTask = () => {
    if (newTasks.trim() !== "") {
      setTasks([...tasks, newTasks]);
      setNewTasks("");
    }
  };

  const deleteTask = (index) => {
    const updatedTask = [...tasks];
    updatedTask.splice(index, 1);
    setTasks(updatedTask);
  };

  return (
    <div>
      <h2>To Do List</h2>
      <input
        type="text"
        value={newTasks}
        onChange={(e) => setNewTasks(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
