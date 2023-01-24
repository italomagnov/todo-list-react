export function Button({ children, type }) {
    return (
        <button
            type={type}
            className="w-full mt-4 px-8 py-4 rounded-lg text-zinc-100 text-2xl bg-violet-500 border-b-4 border-b-violet-900 hover:opacity-90 active:scale-95"
        >
            {children}
        </button>
    );
}
