import React from 'react';
import { Todo } from './models/Todo';
import TodoForm from './components/TodoForm';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <div className="App">
      <h1>My todo list</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (<li>{todo.text}</li>))}
      </ul>
    </div>
  );
}

export default App;
