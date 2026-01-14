function Progress({ courses }) {
  const done = courses.filter(c => c.completed).length;
  const percent = (done / courses.length) * 100;

  return (
    <div className="progress">
      <h3>Progress</h3>
      <div className="bar">
        <div className="fill" style={{ width: percent + "%" }}></div>
      </div>
      <p>{done}/{courses.length} completed</p>
    </div>
  );
}

export default Progress;
