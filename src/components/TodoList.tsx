import React from 'react';
import { Todo } from '../models/Todo';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}

export function TodoList({ todos, toggleTodo }: TodoListProps) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
};
