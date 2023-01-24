import { useState } from 'react';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [newTask, setNewTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    function handleCreateTask(event) {
        event.preventDefault();

        // criando a nova tarefa
        const task_id = uuidv4();
        const task = {
            title: newTask,
            id: task_id,
        };

        // populando o array de tasks com a nova task
        setTaskList([...taskList, task]);

        // limpar o imput após o submit
        event.target.reset();
    }

    function handleDeleteTask(id) {
        setTaskList(taskList.filter((task) => task.id !== id));
    }

    return (
        <div className="w-screen h-screen bg-background">
            <div className="container max-w-lg flex flex-col px-4 items-center mx-auto">
                <Header />

                <TaskForm
                    value={newTask}
                    novaTarefa={(event) => setNewTask(event.target.value)}
                    aoEnviar={handleCreateTask}
                />

                <TaskList
                    deleteTask={handleDeleteTask}
                    tasks={taskList}
                />
            </div>
        </div>
    );
}

export default App;
