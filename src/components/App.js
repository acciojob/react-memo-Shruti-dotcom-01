// App.js
import React, { useState, useEffect } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  useEffect(() => {
    console.log('App mounted');
  }, []);

  const handleAddTodo = () => {
    setTasks([...tasks, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleCustomTaskSubmit = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleIncrement}>Increment counter</button>
      <p>Counter: {counter}</p>
      <input
        type="text"
        value={customTask}
        onChange={handleCustomTaskChange}
        placeholder="Enter custom task"
      />
      <button onClick={handleCustomTaskSubmit}>Submit custom task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <UseMemo />
      <ReactMemo />
    </div>
  );
}

export default App;

