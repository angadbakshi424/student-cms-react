import "./App.css";

import students from "./data/students.json";

import Header from "./components/Header";
import StudentList from "./components/StudentList";
import StatsDashboard from "./components/StatsDashboard";

function App() {
  return (
    <div className="container">

      <Header />

      <StatsDashboard students={students} />

      <StudentList students={students} />

    </div>
  );
}

export default App;