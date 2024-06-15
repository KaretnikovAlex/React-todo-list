import React from 'react';
import { Todo } from './models/Todo';
import { TodoForm } from './components/TodoForm';
import { useState } from 'react';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
  });

  const todoCounter = () => {
    let counter = todos.filter(todo => !todo.completed).length;
    return  counter + ' todos left';
  }

  return (
    <div className="App">
      <h1>My todo list</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      <span>{todoCounter()}</span>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
}

export default App;
