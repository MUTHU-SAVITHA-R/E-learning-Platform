function Navbar() {
  const scrollToCourses = () => {
    document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
  };
   const scrollToIntro = () => {
    document.getElementById("Intro").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <h2>🎓 E-Learn</h2>
      <div className="nav-links">
        <span onClick={scrollToIntro}>Home</span>
        <span onClick={scrollToCourses}>Courses</span>
       
      </div>
    </div>
  );
}

export default Navbar;
