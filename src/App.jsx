import { useState } from "react";
import "./App.css";

import students from "./data/students.json";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CourseFilter from "./components/CourseFilter";
import StudentList from "./components/StudentList";
import StatsDashboard from "./components/StatsDashboard";

function App() {
  const [searchText, setSearchText] = useState("");

  const [selectedCourse, setSelectedCourse] = useState("All");

  const courses = [
    "All",
    ...new Set(students.map((student) => student.course)),
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCourse =
      selectedCourse === "All" ||
      student.course === selectedCourse;

    return matchesSearch && matchesCourse;
  });


  return (
    <div className="container">

      <Header />

      <SearchBar
      searchText={searchText}
      setSearchText={setSearchText}
      />

      <CourseFilter
        courses={courses}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />

      <StatsDashboard students={filteredStudents} />

      <StudentList students={filteredStudents} />
      

    </div>
  );
}

export default App;