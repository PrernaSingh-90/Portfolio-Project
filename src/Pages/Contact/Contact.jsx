import React from "react";
import { RiContactsFill } from "react-icons/ri";
import Header from "../../Components/Header/Header";
import { Animate } from "react-simple-animate";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Header headerText="My Contact" icon={<RiContactsFill size={40} />} />

      <div className="contact-content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact-content-header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact-content-form">
            <div className="contact-content-form-controls-wrapper">
              <div className="nameWrapper">
                <input required name="name" type={"text"} className="inputName" />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>

              <div className="emailWrapper">
                <input required name="email" type={"text"} className="inputEmail" />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>

              <div className="descriptionWrapper">
                <textarea required
                  name="description"
                  type={"text"}
                  rows='5'
                  className="inputdescription"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button className="submit">Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default Contact;
