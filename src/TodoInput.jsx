import { useState } from "react";

function TodoInput({ onAdd }) {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim() !== "") {
            onAdd(text.trim());
            setText("");
        }
    };

    return (
        <div style={{ marginBottom: "10px" }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a todo..."
                style={{ padding: "6px", width: "200px" }}
            />
            <button onClick={handleAdd} style={{ marginLeft: "8px" }}>
                Add
            </button>
        </div>
    );
}

export default TodoInput;
