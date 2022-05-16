import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
        <div className="member-img1"></div>
        <div className="member-info">
          <h1 className="name">Pranesh Kumar</h1>
          <h3 className="position">Digital Marketing Specialist & Coordinator </h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img2"></div>
        <div className="member-info">
          <h1 className="name">Sarath Kumar</h1>
          <h3 className="position">iOS App Developer</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img3"></div>
        <div className="member-info">
          <h1 className="name">Vishal KM</h1>
          <h3 className="position">Senior Software Developer</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
