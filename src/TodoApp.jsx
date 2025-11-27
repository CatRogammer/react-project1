import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, text]);
    };

    const clearTodos = () => {
        setTodos([]);
    };

    return (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "12px" }}>
            <h3>Todo App</h3>
            <TodoInput onAdd={addTodo} />
            <TodoList todos={todos} onClearAll={clearTodos} />
        </div>
    );
}

export default TodoApp;
