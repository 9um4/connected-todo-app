import React from 'react';
import TodoListItem from '../items/TodoListItem';
import './TodoList.scss';
import { Todo } from '../../types/Todo';

type TodoListProps = {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
