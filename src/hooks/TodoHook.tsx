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
        <section className='todo'>
            <h2>My todo list</h2>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
            <div className="buttons-wrapper">
                <span>{todoCounter()}</span>
                <button className={(filter === 'all') ? 'activeBtn' : ''} onClick={() => setFilter('all')}>All</button>
                <button className={(filter === 'active') ? 'activeBtn' : ''} onClick={() => setFilter('active')}>Active</button>
                <button className={(filter === 'completed') ? 'activeBtn' : ''} onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => clearComplited()}>Clear completed</button>
            </div>
        </section>
    );
}