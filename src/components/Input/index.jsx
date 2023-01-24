export function Input({ required }) {
    return (
        <input
            required={required}
            className="w-full mt-8 px-8 py-4 text-2xl border-none rounded-lg outline-none bg-slate-200"
            type="text"
            placeholder="Digite sua tarefa"
        />
    );
}
