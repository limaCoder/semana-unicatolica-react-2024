import { Todo } from "../../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  onDeleteAllCompleted: () => void;
}

export function TodoSummary({ todos, onDeleteAllCompleted }: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} Todos completados
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={onDeleteAllCompleted}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Deletar todos completados
        </button>
      )}
    </div>
  );
}
