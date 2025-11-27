import { useState } from "react";
import StudentCard from "./StudentCard";

function StudentFilter({ students }) {
    const [showOnlyGroup, setShowOnlyGroup] = useState("all");

    // Filter students based on selected group
    const filteredStudents =
        showOnlyGroup === "all"
            ? students
            : students.filter((student) => student.group === showOnlyGroup);

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>Filter Students</h3>

            <div style={{ marginBottom: "10px" }}>
                <button onClick={() => setShowOnlyGroup("all")} style={{ marginRight: "6px" }}>
                    All
                </button>
                <button onClick={() => setShowOnlyGroup("SE-101")} style={{ marginRight: "6px" }}>
                    SE-101
                </button>
                <button onClick={() => setShowOnlyGroup("SE-102")} style={{ marginRight: "6px" }}>
                    SE-102
                </button>
                <button onClick={() => setShowOnlyGroup("SE-103")} style={{ marginRight: "6px" }}>
                    SE-103
                </button>
            </div>

            {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                    <StudentCard
                        key={student.id}
                        name={student.name}
                        group={student.group}
                        track={student.track || "Not specified"}
                    />
                ))
            ) : (
                <p>No students in this group.</p>
            )}
        </div>
    );
}

export default StudentFilter;
