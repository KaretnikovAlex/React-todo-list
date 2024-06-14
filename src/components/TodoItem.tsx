import React from 'react';
import { Todo } from '../models/Todo';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo }: TodoItemProps) {
    return (
        <li
            onClick={() => toggleTodo(todo.id)}
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
            }}
        >
            {todo.text}
        </li>
    );
};

export default TodoItem;
