import { useState } from "react";

function CourseDetails() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <h3>React Fundamentals</h3>

            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide details" : "Show details"}
            </button>

            {showDetails && (
                <p style={{ marginTop: "10px" }}>
                    This course covers JSX, components, props, state, and hooks. Perfect for beginners!
                </p>
            )}
        </div>
    );
}

export default CourseDetails;
