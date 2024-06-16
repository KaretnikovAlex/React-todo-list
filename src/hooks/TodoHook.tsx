import React from 'react';
import { Todo } from '../models/Todo';
import { TodoForm } from '../components/TodoForm';
import { useState } from 'react';
import { TodoList } from '../components/TodoList';

export function TodoHook() {
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
        return counter + ' todos left';
    }

    const clearComplited = () => {
        setTodos(todos.map(todo => (todo.completed ? { ...todo, completed: false } : todo)));
    }

    return (
        <section>
            <h2>My todo list</h2>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
            <span>{todoCounter()}</span>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => clearComplited()}>Clear completed</button>
        </section>
    );
}