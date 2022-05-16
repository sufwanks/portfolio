import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">Our Technologies</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>HTML5</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>CSS</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>JavaScript</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>Bootstrap</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>React</h1>
        </div>
        <div className="qualification">
          <div className="content java"></div>
          <h1>Java</h1>
        </div>
        <div className="qualification">
          <div className="content swift"></div>
          <h1>Swift</h1>
        </div>
        <div className="qualification">
          <div className="content ruby"></div>
          <h1>Ruby</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
