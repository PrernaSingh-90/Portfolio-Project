import React from "react";
import Header from "../../Components/Header/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { DiAndroid, DiApple } from "react-icons/di";
import { FaDatabase, FaDev } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Prerna",
  },
  {
    label: "Age",
    value: "26",
  },
  {
    label: "Address",
    value: "New Delhi , India",
  },
  {
    label: "Email",
    value: "priyasingh.sp98@gmail.com",
  },
  {
    label: "Contact No",
    value: "(+91) 7701893974",
  },
];

const jobSummary =
  "Seeking a role as a front-end developer so I can use my thorough knowledge of programming frameworks and development software and I am skilled in incorporating the newest web-based application technologies and developing tailored solutions for clients and also A goal-oriented Entry Level Frontend Developer with knowledge of HTML, CSS, JavaScript, React, Angular, and Vue";

function About() {
  return (
    <section className="about" id="about">
      <Header headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="content">
        <div className="personal-wrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Front-End Developer</h3>
            <p className="summary">{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="prsnalInfo">Personal Information</h3>
            <ul className="under">
              {personalDetails.map((item, i) => (
                <li className="underline" key={i}>
                  <span className="title">{item.label} :-</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="service-wrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
          <div className="inner-content">
          <div>
            <FaDev size={60} color="#ffdd40" />
          </div>
          
          <div>
            <DiAndroid size={60} color="#ffdd40" />
          </div>

          <div>
            <FaDatabase size={60} color="#ffdd40" />
          </div>

          <div>
            <DiApple size={60} color="#ffdd40" />
          </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
