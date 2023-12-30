import React from "react";
import "./About.css";
import AboutImage from "../../assets/images/dk.jpg";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={AboutImage} alt="about-image" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am student of BTech with computer science specialization. I am
              working as Full Stack website development using JavaScript and
              TypeScript. I also expend some time explor new IT sector
              technology. I have learnt some technologies and skills like
              -Reactjs, Nextjs, React Native, Git & GitHub, Linux,Strapi, Word
              Press, Html, Css, Bootstrap, Tailwind CSS, J2SE, J2EE, C/C++,
              Python, Node Js, Mongodb, Express js,Data Structure,Video Editing,
              Adndroid Studio etc. I have some other activities and skills like
              writing poem, leadership,Social activist, teaching. My favorite
              sports is cricket and also some little other sports. Thank you !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
