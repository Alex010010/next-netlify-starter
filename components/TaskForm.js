// components/TaskForm.js

import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [taskInput, setTaskInput] = useState('');

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      onAddTask(taskInput);
      setTaskInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={handleTaskInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
