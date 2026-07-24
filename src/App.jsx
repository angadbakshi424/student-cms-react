import { useState } from "react";
import "./App.css";

import students from "./data/students.json";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import StatsDashboard from "./components/StatsDashboard";

function App() {
  const [searchText, setSearchText] = useState("");

  const [selectedCourse, setSelectedCourse] = useState("All");

  return (
    <div className="container">

      <Header />

      <SearchBar
      searchText={searchText}
      setSearchText={setSearchText}
      />

      <StatsDashboard students={students} />

      <StudentList students={students} />

      

    </div>
  );
}

export default App;