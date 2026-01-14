function VideoPlayer({ course, markComplete }) {
  return (
    <div className="video">
      <h3>{course.title}</h3>
      <iframe src={course.video} allowFullScreen></iframe>
      <button onClick={markComplete}>Complete & Next ▶</button>
    </div>
  );
}

export default VideoPlayer;
