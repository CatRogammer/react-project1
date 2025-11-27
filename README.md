# React Fundamentals Workshop – Completed Exercises

This repository contains the **complete, working solutions** for the React beginner workshop consisting of 13 progressive exercises.  
Each exercise builds on the previous ones and demonstrates core React concepts such as components, props, composition, lists, state, events, and controlled components.


## Completed Exercises Overview

### A. Warm-up: Simple Components
1. **Hello** – First functional component rendering `<h1>Hello, React!</h1>` + personal intro paragraph.
2. **CourseInfo** – Displays course title, description, and a bullet list of learning outcomes.

### B. Props: Passing Data to Components
3. **StudentCard** – Reusable card that receives `name`, `group`, and `track` props.  
   Three example students rendered in `App.jsx`.
4. **PrimaryButton** – Button component with required `label` prop and optional `type` prop  
   (`primary` / `secondary`) that applies different CSS classes.

### C. Composition & props.children
5. **Card** – Wrapper component with border & padding that renders any `children`.  
   Used standalone and to wrap `StudentCard`.
6. **Layout** – Full-page layout with `Header`, `<main>` (children), and `Footer`.

### D. Lists & Repeating Components
7. **StudentList** – Receives an array of student objects and maps them to `StudentCard` components (with proper `key`).
8. **Menu** – Horizontal navigation bar. Links array is passed as a prop from `App.jsx` for full reusability.

### E. State + Events (Beginner Level)
9. **Counter** – Classic counter with `+1` and `Reset` buttons using `useState`.
10. **CourseDetails** – Toggle button that shows/hides additional course information.
11. **LivePreview** – Controlled input that instantly previews typed text.

### F. Small Mini-Projects
12. **TodoApp** (Beginner Version) – Fully functional todo list split into three components:
    - `TodoApp` – holds state and logic
    - `TodoInput` – controlled input + “Add” button
    - `TodoList` – renders the list of todos  
      Includes “Clear all” button.

13. **StudentFilter** – Interactive student browser with filter buttons (“All”, “SE-101”, “SE-102”, “SE-103”).  
    Uses local state to filter the displayed students while keeping the original array intact.

