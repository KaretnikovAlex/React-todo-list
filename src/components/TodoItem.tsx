import React from 'react';
import { Todo } from '../models/Todo';

interface TodoItemProps {
    todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
    return (
        <li>
            {todo.text}
        </li>
    );
};

export default TodoItem;
