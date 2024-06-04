import { Todo } from "../../types/todo";
import { TodoItem } from "../TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export function TodoList({ todos, onCompleteChange, onDelete }: TodoListProps) {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((item: Todo) => (
          <TodoItem
            key={item.id}
            todo={item}
            onCompletedChange={onCompleteChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          Sem todos ainda. Adicione um novo acima.
        </p>
      )}
    </>
  );
}
