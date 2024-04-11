import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useState } from 'react';
import TaskForm from '@components/TaskForm';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Welcome to my app! Alex010" />

      <main>
        <h1>Todo App</h1>
        <TaskForm onAddTask={handleAddTask} />
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
