import React from 'react';
import GitIcon from '../utils/images/icons/github.png';
import Email from '../utils/images/icons/email.png';
import LinkedIn from '../utils/images/icons/linkedin.png'

function Contact() {
    return (
        <section id="Contact" className="d-flex">
            <div className="card border-light col-12 py-4">
                <div className="card-body">
                    <header className="mb-1"><h1>Get in touch:</h1></header>
                    <hr style={{ border: "2px solid grey" }} className="mb-4" />
                    <ul className="list-group list-group-flush" style={{ alignItems: "baseline",width: "100%"}}>
                        <li className="list-group-item align-left">
                            <a target="_blank" rel='noopener noreferrer' href='mailto:omata48@outlook.com?subject=Hello%20Omar%20(portfolio)'><img src={Email} alt='email icon' /></a>
                            <span className="h4 ml-3">Send me an email: omata48@outlook.com</span>
                        </li>
                        <li className="list-group-item align-left">
                            <a target="_blank" rel='noopener noreferrer' href='https://github.com/omata48'><img src={GitIcon} alt='github icon'/></a>
                            <span className="h4 ml-3">My Projects on Github: https://github.com/omata48</span> 
                        </li>
                        <li className="list-group-item align-left">
                            <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/omar-mata'><img src={LinkedIn} alt='linkedin icon' /></a> 
                            <span className="h4 ml-3">Connect with me on LinkedIn: https://www.linkedin.com/in/omar-mata/</span> 
                        </li>
                    </ul>
                </div>
            </div>
            {/* <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
            <div className="LI-profile-badge d-inline-block col-4 align-middle" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="omar-mata">
                <a className="LI-simple-link" href='https://www.linkedin.com/in/omar-mata?trk=profile-badge' target="_blank">
                    Omar Mata
                </a>
            </div> */}
        </section>
    )
}

export default Contact;