import {
  getTotalStudents,
  getAverageAge,
  getCourseCount,
} from "../utils/stats";

function StatsDashboard({ students }) {
  const totalStudents = getTotalStudents(students);

  const averageAge = getAverageAge(students);

  const courseCount = getCourseCount(students);

  return (
    <div className="stats">

      <h2>Statistics</h2>

      <p>Total Students: {totalStudents}</p>

      <p>Average Age: {averageAge}</p>

      <h3>Students Per Course</h3>

      {Object.entries(courseCount).map(
        ([course, count]) => (
          <p key={course}>
            {course}: {count}
          </p>
        )
      )}

    </div>
  );
}

export default StatsDashboard;