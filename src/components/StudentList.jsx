import StudentCard from "./StudentCard";

function StudentList({ students }) {
  if (students.length === 0) {
    return <h2>No students found</h2>;
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          email={student.email}
          course={student.course}
          enrollmentYear={student.enrollmentYear}
          gpa={student.gpa}
        />
      ))}
    </div>
  );
}

export default StudentList;