import React from 'react';
import { Todo } from '../models/Todo';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo}/>
            ))}
        </ul>
    );
};
