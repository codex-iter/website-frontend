import React,{useState} from "react";
import Styles from "../Styles/About.module.css";
import banner from "../Assets/Images/banner.svg";
import emailSvg from "../Assets/Icons/email.svg"
import CustomInput from "../Components/Input";
import CustonButton from "../Components/Buttons"
const About = () => {
    const [email, setEmail] = useState("");
    const handleClick = () => {
        
    }
    return (
        <div className={ Styles.about_outer }>
            <div className={ Styles.about_banner }>
                <div><img src={ banner } alt=""/></div>
            </div>
            <div className={ Styles.about_content }>
                <div className={ Styles.content_left }>
                    <div className={ Styles.content_heading }>Our Story!</div>
                    <div className={ Styles.content_para }>
                        Mauris porttitor fermentum massa, non ullamcorper turpis ornare nec. Suspendisse arcu odio, hendrerit non tempor vel, gravida ac libero. Aliquam accumsan bibendum ante. Cras quis urna at augue convallis interdum. 
                    </div>
                </div>
                <div className={ Styles.content_right }>
                    <div className={ Styles.newsletter_heading }>Join our monthly Newsletter</div>
                    <div className={Styles.input_email}>
                        <CustomInput
                        name="email"
                        value={ email }
                        type="text"
                        placeholder="Email"
                        path="" handleChange={ (e) => setEmail(e.target.value) }
                        svg={ emailSvg } />
                    </div>
                    <div className={Styles.button_margin}> 
                        <CustonButton text="Subscribe" page="" handleClick={ handleClick }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About