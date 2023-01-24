import { Trash } from 'phosphor-react';

export function TaskList({ tasks, deleteTask }) {
    return (
        <div className="flex flex-col w-full mt-8 text-zinc-100 text-left">
            {tasks.map((task) => (
                <ul key={task.id}>
                    <li className="flex items-center justify-between border-2 border-violet-900 rounded-lg p-4 mb-2">
                        <div className="flex gap-4 items-center mr-4">
                            <input
                                type="checkbox"
                                id={task.id}
                                className="peer h-5 w-5 shrink-0 appearance-none rounded-sm border hover:ring hover:ring-violet-300 checked:bg-violet-500"
                            />
                            <label
                                htmlFor={task.id}
                                className="w-full cursor-pointer font-medium text-zinc-100 peer-checked:text-zinc-600 peer-checked:line-through"
                            >
                                {task.title}
                            </label>
                        </div>

                        <Trash
                            onClick={() => deleteTask(task.id)}
                            size={16}
                            className="cursor-pointer"
                        />
                    </li>
                </ul>
            ))}
        </div>
    );
}
