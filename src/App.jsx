import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import students from "./data/students.json";

function App() {
  return (
    <>
      <Header />
      <StudentCard 
        name="Aarav Sharma"
        course="React Native"
        gpa={8.4}
      />
    </>
  );
}

export default App;