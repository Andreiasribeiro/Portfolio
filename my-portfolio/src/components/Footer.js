import React from 'react';
import fb from "./images/fb.svg";
import git from "./images/git.svg";
import inst from "./images/inst.svg";
import wtapp from "./images/wtapp.svg";
import lin from "./images/lin.svg";
import './Footer.css'

function Footer() {
    return (

        <div>
            <div className="footer-midias">
                <div className="footer-logo">
                    {/* <a href="/"><img className="logo-img" src={logomotor} alt="Logo"></img></a> */}
                </div>
                <div className="footer-p" >
                    <p>I'm always looking for new and exciting opportunities. Let's connect.</p>
                </div>
                <div className='novo'>
                    <div className="midias" >
                    <a href="https://www.linkedin.com/in/andreiasalesribeiro/" target="_blank"><img className="icon-img" src={lin} alt="Linkedin"></img></a>
                        <a href="https://github.com/Andreiasribeiro" target="_blank"><img className="icon-img" src={git} alt="Facebook"></img></a>
                        <a href="https://www.instagram.com/byandreiaribeiro/" target="_blank"><img className="icon-img" src={inst} alt="Instagram"></img></a>
                         <a href="https://wa.me/+35388888888" target="_blank"><img className="icon-img" src={wtapp} alt="WhatsApp"></img></a>
                                         </div>
                    <div>
                        <p>asribeirodesign@gmail.com</p>
                    </div>
                </div>
            </div >{/*close "footer-midias"*/}
            <div className="my-footer" >
                <p>React app made with love by Andréia Ribeiro © 2021</p>
            </div>

        </div>

    );
}

export default Footer

