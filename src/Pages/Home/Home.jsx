import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleNavigateToResumePage = () => {
    navigate("/resume");
  };

  return (
    <section className="home" id="home">
      <div className="text-wrapper">
        <h1>
          Hello, I'm Prerna
          <br />
          Front End Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <button className="download-btn" onClick={handleNavigateToResumePage}>Download Resume</button>
        </div>
      </Animate>

      <Animate
        play
        duration={3}
        delay={1}
        start={{ transform: "translateX(-600px)" }}
        end={{ transform: "translateX(0px)" }}
      >
         <div className="social-icons">
          <FaLinkedin size={30}/>
          <FaFacebookSquare size={30}/>
          <FaTwitterSquare size={30}/>
          <FaInstagramSquare size={30}/>
          <FaGithubSquare size={30}/>
         </div>
         </Animate>

    </section>
  );
}

export default Home;
