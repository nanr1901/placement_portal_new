import React from "react";
import "./ContactUs.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import img from './contact-image.png';

const ContactUs =()=>{
    return (
        <>
        <div className="contact-page">
        <NavBar/>
        <div className="contact-box">
            <div className="contact-image">
                <img src={img}></img>
            </div>
            <div className="contact-text">
                <span className="contact-name">
                Dr. A. K. Bakthavatsalam <br/>
                </span>
                <span>
                Professor (HAG) & Head<br/>
Department of Training and Placement<br/>
National Institute of Technology, Tiruchirapalli<br/>
Tel: 0431-2501081, 2503781, 2503788<br/>
Email: tp@nitt.edu, tnp.nitt@gmail.com
                </span>
            </div>
        </div>

        </div>
        <Footer/>
</>
    );
}

export default ContactUs;