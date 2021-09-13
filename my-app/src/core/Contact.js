import React, { useState } from "react";
import Base from "./Base"
import Styles from "../Styles/Contact.module.css";
import CustomSocialIcon from "../Components/SocialIcons"
import CustomInput from "../Components/Input";
import CustomButton from "../Components/Buttons";
import insta from "../Assets/Icons/insta.svg"
import facebook from "../Assets/Icons/facebook.svg"
import twitter from "../Assets/Icons/twitter.svg"
import linkedIn from "../Assets/Icons/linkedIn.svg"
import YT from "../Assets/Icons/YoutubeLogo.svg";
import userSvg from "../Assets/Icons/user.svg";
import emailSvg from "../Assets/Icons/email.svg";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = () => {
        
        fetch("http://codexweb-backend.herokuapp.com/api/addMessage", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                message:message
            }),
             headers: {
        "Content-type": "application/json; charset=UTF-8"
          }
        }).then((res) => {
            if (res.status === 200) {
                 Toastify({
                    text: "Message sent successfully !!",
                    duration: 3000,
                    backgroundColor: "#E0EEF7",
                    className: Styles.toast,
                    stopOnFocus: true,
                    position:"right"
                }).showToast();
                setName("");
                setEmail("");
                setMessage("");
            }
        }).catch((err) => {
            console.log(err)
        })
       
    }
    
    return (
        <Base>
        <div className={ Styles.contact_outer }>
            <div className={ Styles.contact_inner }>
                <div className={ Styles.contact_inner_left }>
                    <div className={ Styles.left_heading }>Drop us a line.</div>
                    <div className={ Styles.left_sub_heading }>Or DM us on </div>
                    <div className={ Styles.icon_section }>
                         <CustomSocialIcon svg={ insta } href="https://www.instagram.com/codexiter/" />
                         <CustomSocialIcon svg={ facebook } href="https://www.facebook.com/codexiter" />
                         {/* <CustomSocialIcon svg={ twitter } /> */}
                        <CustomSocialIcon svg={ linkedIn } href="https://www.linkedin.com/company/codex-iter/" />
                        <CustomSocialIcon svg={ YT } href="https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA" />
                    </div>
                </div>
                <div className={ Styles.contact_inner_right }>
                    <div className={Styles.input_name}>
                         <CustomInput
                        name="name"
                        value={ name }
                        type="text"
                        placeholder="Name"
                        path="contact"
                        handleChange={ (e) => setName(e.target.value) }
                        svg={ userSvg } />
                    </div>
                    <div className={Styles.input_name}>
                         <CustomInput
                        name="email"
                        value={ email }
                        type="text"
                        placeholder="Email"
                        path="contact"
                        handleChange={ (e) => setEmail(e.target.value) }
                        svg={ emailSvg } />
                    </div>
                    <div className={Styles.input_msg}>
                         <CustomInput
                        name="message"
                        value={ message }
                        type="textarea"
                        placeholder="Message..."
                        path="contact"
                        handleChange={ (e) => setMessage(e.target.value) }
                         />
                   </div>
                    <div className={Styles.input_button}>
                         <CustomButton text="SEND" page="contact"handleClick={handleSend} />
                   </div>
                </div>
            </div>
       </div></Base>
   ) 
}

export default Contact;