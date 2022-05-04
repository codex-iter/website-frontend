import React from "react";
import Base from "../layouts/Base";
import Styles from "../styles/About.module.css";
import banner from "../assets/images/about.png";
import CustomButton from "../components/Buttons";

const About = () => {
  
  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdOp_wsPsjwFvxhSRECAxBsUGeL2s4cjJ1SghNLgNPg7f8bHQ/viewform"
    );
  };

  return (
    <div>
      <Base>
        <div className={Styles.about_outer}>
          <div className={Styles.about_banner}>
            <img src={banner} alt="" />
          </div>
          <div className={Styles.about_content}>
            <div className={Styles.content_left}>
              <div className={Styles.content_heading}>Our Story!</div>
              <div className={Styles.content_para}>
                We here at codex are identified as coders only because we know
                what it takes to start from scratch and keep on scratching till
                we achieve our goals.
                <br />
                We have seen our aluminis sharpen their skills, work in teams,
                brainstorm ideas and get placed in fortune companies. Our goal
                is not to teach anyone rather, learn together.
              </div>
            </div>
            <div className={Styles.content_right}>
              <div className={Styles.newsletter_heading}>
                Join our monthly Newsletter
              </div>
              {/* <div className={Styles.input_email}>
                <CustomInput
                  name='email'
                  value={email}
                  type='text'
                  placeholder='Email'
                  path=''
                  handleChange={(e) => setEmail(e.target.value)}
                  svg={emailSvg}
                />
              </div> */}
              <div className={Styles.button_margin}>
                <CustomButton
                  text="Subscribe"
                  page=""
                  handleClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};

export default About;
