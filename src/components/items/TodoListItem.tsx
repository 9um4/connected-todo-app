import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from 'react-icons/md';
import './TodoListItem.scss';
import { Todo } from '../../types/Todo';

type TodoListItemProps = {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoListItem = ({ todo, onRemove, onToggle }: TodoListItemProps) => {
  const { id, title, completed } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={`checkbox ${completed ? 'checked' : ''}`}
        onClick={() => onToggle(id)}
      >
        {completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{title}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  );
};

export default TodoListItem;
