import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import AllTask from './Components/AllTask';
import Header from './Components/Header';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design landing page', category: 'Work', priority: 'High', completed: false, date: '2026-06-23' },
    { id: 2, title: 'Buy groceries', category: 'Personal', priority: 'Medium', completed: true, date: '2026-06-23' },
    { id: 3, title: 'Read React docs', category: 'Learning', priority: 'Low', completed: false, date: '2026-06-24' },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="App min-h-screen relative overflow-hidden bg-linear-to-br from-indigo-950 via-purple-900 to-pink-900">
      {/* Animated background blobs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        <Header />
        <main className="max-w-5xl mx-auto px-6 py-8">
          <AddTask onAdd={addTask} />
          <AllTask tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </main>
      </div>
    </div>
  );
}

export default App;