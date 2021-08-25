import React from "react";
import Base from "./Base";
import banner from "../Assets/Images/19362653 1.png";
import gif from "../Assets/Images/Codex.gif";
import Slider from "./Slider";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
const Home = () => {
  return (
    <div>
      <Base>
        <div className='section'>
          <section className='split'>
            <div>
              <div className='container1'>
                {" "}
                <span className='heading'>A Community of Coders from ITER</span>
                <p className='p'>
                  We Code, <br />
                  We Explore.
                </p>
                <ContactInfo></ContactInfo>
                <button className='btn-github'>
                  <div className='btn-container' style={{ width: "100%" }}>
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "0",
                        display: "inline-block",
                      }}
                      src='https://img.icons8.com/fluency-systems-filled/48/000000/github.png'
                    />
                    Visit Github
                  </div>
                </button>
              </div>
            </div>

            <div>
              {/* <div className='container1'> */}
              <img
                className='banner'
                style={{ width: "100%", height: "100%" }}
                src={gif}
                alt=''
              />
            </div>
            {/* </div> */}
          </section>
        </div>
        <section
          className='split2'
          style={{ backgroundColor: "#0C1E3C", height: "43.2em" }}
        >
          <div className='display'>
            <img src='https://img.icons8.com/fluency-systems-regular/48/000000/guest-male.png' />
            <h1>100+</h1>
            <h2>Members</h2>
          </div>
          <div className='display'>
            <img src='https://img.icons8.com/ios/50/000000/repository.png' />
            <h1>30+</h1>
            <h2>Projects</h2>
          </div>
          <div className='display'>
            <img src='https://img.icons8.com/ios-filled/50/000000/merge-git.png' />
            <h1>1K+</h1>
            <h2>Commits</h2>
          </div>
        </section>

        <section className='slider'>
          <div className='container-testimonial'>
            <Slider></Slider>
          </div>
        </section>
        <section className='contact-form'>
          <ContactForm></ContactForm>
        </section>
      </Base>
    </div>
  );
};

export default Home;
