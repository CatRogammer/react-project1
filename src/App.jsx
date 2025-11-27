import Layout from "./Layout";
import Hello from "./Hello";
import CourseInfo from "./CourseInfo";
import PrimaryButton from "./PrimaryButton";
import Card from "./Card";
import StudentList from "./StudentList";
import Menu from "./Menu";
import Counter from "./Counter";
import CourseDetails from "./CourseDetails";
import LivePreview from "./LivePreview";
import TodoApp from "./TodoApp";
import StudentFilter from "./StudentFilter.jsx";

function App() {

    const students = [
        { id: 1, name: "Aida", group: "SE-101" },
        { id: 2, name: "Nurlan", group: "SE-102" },
        { id: 3, name: "Dastan", group: "SE-103" },
    ];

    const navLinks = ["Home", "Courses", "About", "Contact"];

    return (
        <Layout>
            <Menu links={navLinks} />
            <Hello />
            <CourseInfo />
            <TodoApp />
            <StudentFilter students={students} />
            <Card>
                <h3>Student Directory</h3>
                <StudentList students={students} />
            </Card>

            <Counter />

            <CourseDetails />

            <LivePreview />

            <PrimaryButton label="Login" type="primary" />
            <PrimaryButton label="Register" type="secondary" />
            <PrimaryButton label="Submit" type="primary" />
        </Layout>
    );
}

export default App;
