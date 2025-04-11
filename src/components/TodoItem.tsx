import { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
