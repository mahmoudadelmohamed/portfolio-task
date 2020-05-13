import React from "react";
import aboutImag from "../../assets/images/photo.jpg";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import "./About.scss";
const overview = `
Hello,
I am Mahmoud and I am a Front-end developer with skills
 like  HTML, HTML5, CSS, CSS3, Bootstrap, Javascript, OOP, Data structures and algorithms, AJAX, React.js,
 Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and
 I am confident I would be an excellent addition to your organization. In addition to my knowledge base,
  I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has
  allowed me to stay ahead of the curve and deliver exceptional work to all of my employers, including
  those I've worked for on a project basis. I’ve attached a copy of my resume detailing my experience,
  along with links to websites and applications I’ve had the honour of working on
`;
const About = () => {
  return (
    <div id="about" className="about py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <Title
              title="about me"
              className="title_uppercase h1-2-light"
              underline="valid"
            />
            <Paragraph text={overview} className="mb-xs-40 my-5 w-75" />
          </div>
          <div className="col-10 col-md-6 mx-auto align-self-center my-5">
            <div className="about-img-container">
              <img src={aboutImag} alt="aboutImag" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
