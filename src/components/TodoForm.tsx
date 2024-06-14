import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
