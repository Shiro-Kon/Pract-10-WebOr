import { useState } from "react";

type Task = {
    id: number;
    title: string;
    completed: boolean;
  };

const Home = (props: Task) => {


  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState<string>('');


  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: newTask,
          completed: false,
        },
      ]);
      setNewTask('');
    }
  };


  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

 
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-7xl font-semibold mb-4">ToDo List</h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          className="border rounded p-2 mr-2"
          placeholder="Add a new task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <ul className="w-full max-w-[80%] min-h-[500px] bg-slate-400/40 p-4 rounded-lg">
        {tasks.map(task => (
          <li
            key={task.id}
            className="bg-white rounded-lg shadow-md mb-4 p-4 flex justify-between items-center"
          >
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.title}
            </span>
            <div>
              <button
                className="text-green-500 px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-green-50"
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? 'Undo' : 'Done'}
              </button>
              <button
                className="text-red-500 px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-red-50"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Home