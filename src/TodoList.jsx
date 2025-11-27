function TodoList({ todos, onClearAll }) {
    return (
        <div>
            {todos.length > 0 ? (
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            ) : (
                <p>No todos yet.</p>
            )}

            {todos.length > 0 && (
                <button onClick={onClearAll} style={{ marginTop: "10px" }}>
                    Clear All
                </button>
            )}
        </div>
    );
}

export default TodoList;
