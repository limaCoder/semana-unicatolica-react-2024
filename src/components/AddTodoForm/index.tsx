import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit(input);
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="O precisa ser feito?"
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        disabled={!input}
        type="submit"
        className="min-w-20 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Adicionar
      </button>
    </form>
  );
}
