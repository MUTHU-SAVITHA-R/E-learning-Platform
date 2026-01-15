import Navbar from "./Navbar";
import Intro from "./Intro";
import CourseList from "./CourseList";
import VideoPlayer from "./VideoPlayer";
import Progress from "./Progress";
import { useState } from "react";
import { courses as courseData } from "./data";
import "./App.css";

function App() {
  const [courses, setCourses] = useState(courseData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const markComplete = () => {
    const updated = [...courses];
    updated[currentIndex].completed = true;
    setCourses(updated);

    if (currentIndex < courses.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <Navbar />

     
      <Intro />

      
      <div className="main" id="courses">
  <div className="left">
    <CourseList courses={courses} setIndex={setCurrentIndex} />
    <Progress courses={courses} />
  </div>

  <VideoPlayer 
    course={courses[currentIndex]} 
    markComplete={markComplete} 
  />
</div>
    </>
  );
}

export default App;
