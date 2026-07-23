function StudentCard({
  name,
  age,
  email,
  course,
  enrollmentYear,
  gpa,
}) {
  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Enrollment Year:</strong> {enrollmentYear}
      </p>

      <p>
        <strong>GPA:</strong> {gpa}
      </p>
    </div>
  );
}

export default StudentCard;