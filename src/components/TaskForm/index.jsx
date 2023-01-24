import { Button } from '../Button';
import { Input } from '../Input';

export function TaskForm({ aoEnviar, value, novaTarefa }) {
    return (
        <form
            className="w-full"
            onSubmit={aoEnviar}
            onChange={novaTarefa}
        >
            <div className="">
                <Input
                    value={value}
                    required
                />
                <Button
                    type="submit"
                    children="Adicionar Tarefa"
                />
            </div>
        </form>
    );
}
