import React, { useState } from 'react';

import TodoTemplate from './components/containers/TodoTemplate';
import TodoList from './components/lists/TodoList';
import TodoInsert from './components/controllers/TodoInsert';
import { Todo } from './types/Todo';

let nextId = 4; // 임시 ID 증가용 전역 변수

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Study React', completed: true },
    { id: 2, title: 'Study TypeScript', completed: false },
    { id: 3, title: 'Study Redux', completed: false },
  ]);

  const handleInsert = (text: string) => {
    const newTodo: Todo = {
      id: nextId++,
      title: text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleRemove = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={handleInsert} />
      <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
    </TodoTemplate>
  );
};

export default App;
