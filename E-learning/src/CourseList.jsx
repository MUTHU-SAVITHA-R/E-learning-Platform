function CourseList({ courses, setIndex }) {
  return (
    <div className="course-list">
      <h3>Courses</h3>
      {courses.map((c, i) => (
        <div key={c.id} className="course" onClick={() => setIndex(i)}>
          {c.title} {c.completed && "✔"}
        </div>
      ))}
    </div>
  );
}

export default CourseList;
