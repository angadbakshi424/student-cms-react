export function getTotalStudents(students) {
  return students.length;
}

export function getAverageAge(students) {
  const totalAge = students.reduce((sum, student) => {
    return sum + student.age;
  }, 0);

  return (totalAge / students.length).toFixed(1);
}

export function getCourseCount(students) {
  return students.reduce((courses, student) => {
    courses[student.course] =
      (courses[student.course] || 0) + 1;

    return courses;
  }, {});
}