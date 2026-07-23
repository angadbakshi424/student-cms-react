function StudentCard({ name, course, gpa }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>GPA: {gpa}</p>
    </div>
  );
}

export default StudentCard;