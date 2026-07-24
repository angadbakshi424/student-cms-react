# Student Course Management System (React)

A **React-based Student Course Management System** built using **Vite**. This project is the React version of the Week 2 JavaScript application and demonstrates core React concepts including components, props, state, controlled inputs, list rendering, and conditional rendering.

---

## 📌 Features

- Display all students from `students.json`
- Search students by name
- Filter students by course
- Search and filter work together
- Statistics Dashboard
  - Total Students
  - Average Age
  - Students Per Course
- Empty state when no students match
- Responsive card-based layout
- Reusable React components

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS

---

## 📂 Project Structure

```text
student-cms-react/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CourseFilter.jsx
│   │   ├── StudentCard.jsx
│   │   ├── StudentList.jsx
│   │   └── StatsDashboard.jsx
│   │
│   ├── data/
│   │   └── students.json
│   │
│   ├── utils/
│   │   └── stats.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
│
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```
---

## 📖 Mandatory React Concepts

| React Concept | File(s) |
|--------------|---------|
| Component Composition | `App.jsx`, `components/*` |
| Props | `StudentList.jsx`, `StudentCard.jsx` |
| JSX | All Components |
| List Rendering (`map`) | `StudentList.jsx` |
| Key Prop | `StudentList.jsx` |
| `useState` | `App.jsx` |
| Controlled Inputs | `SearchBar.jsx`, `CourseFilter.jsx` |
| Conditional Rendering | `StudentList.jsx` |
| Derived Values | `App.jsx` |
| Utility Functions | `utils/stats.js` |

---

## 📊 Application Features

### 🔍 Search Students

- Search students by name.
- Updates automatically as the user types.

### 🎯 Filter by Course

- Filter students based on their enrolled course.
- Works together with the search functionality.

### 📈 Statistics Dashboard

Displays:

- Total Students
- Average Age
- Number of Students per Course

### 📋 Student List

Each student card displays:

- Student Name
- Age
- Course
- Email (if available)

### 🚫 Empty State

Displays a friendly message when no students match the current search and filter criteria.

---

## ⚛️ React vs Vanilla JavaScript

### ✅ What React Made Easier

- Automatic UI updates when state changes.
- Reusable components reduce duplicated code.
- Easier state management.
- Cleaner and more maintainable code structure.
- No manual DOM manipulation.

### ⚠️ What React Made More Challenging

- Understanding component hierarchy.
- Learning props and state.
- Managing data flow between components.
- Understanding controlled components.

---

## 🧠 State Management

The application state lives inside **`App.jsx`**.

State includes:

- Search text
- Selected course

These values are shared with:

- `SearchBar`
- `CourseFilter`
- `StudentList`
- `StatsDashboard`

---

## 🔄 Derived Data

The filtered student list is derived from:

- Search text
- Selected course

Statistics are calculated using utility functions inside:

```text
src/utils/stats.js
```

---

## 📁 Data Source

Student information is stored in:

```text
src/data/students.json
```

---

## 🚀 Future Improvements

- Add Student Form
- Edit Student Details
- Delete Student
- Student Details Modal
- Sorting Options
- Pagination
- Local Storage Support
- Responsive Design Improvements
- Dark Mode

---

## 👨‍💻 Author

**Angad Bakshi**

