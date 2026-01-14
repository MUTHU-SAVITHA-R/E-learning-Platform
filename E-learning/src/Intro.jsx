import hero from "./hero.avif"

function Intro() {
  return (
    <div className="intro"  id="Intro">
      <div className="intro-text">
        <h1>Learn Anytime, Anywhere</h1>
        <p>
          Our E-Learning platform provides structured courses with videos,
          progress tracking and easy navigation to help you learn efficiently.
        </p>
        <p>
          This platform is built using React and modern UI design for a smooth
          learning experience.
        </p>
      </div>

      <img src={hero} alt="learning" />
    </div>
  );
}

export default Intro;
