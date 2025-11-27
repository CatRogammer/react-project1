import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
                Reset
            </button>
        </div>
    );
}

export default Counter;
