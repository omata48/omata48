import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return (
        <section id="bodyMain" className="container my-5 d-flex">
            <div className="card border-light col-12">
                <div className="card-body">
                    <header className="mb-1"><h1>Get in touch:</h1></header>
                    <hr style={{ border: "2px solid grey" }} className="mb-4" />
                    <ul className="list-group list-group-flush" style={{ alignItems: "baseline"}}>
                        <li className="list-group-item align-left"><SocialIcon url='mailto:omata48@outlook.com?subject=Hello Omar (portfolio)' bgColor="#343A40" /> <span className="h4 ml-3">Send me an email: omata48@outlook.com</span></li>
                        <li className="list-group-item align-left"><SocialIcon url='https://github.com/omata48' bgColor="#848484" /> <span className="h4 ml-3">My Projects on Github: https://github.com/omata48</span> </li>
                        <li className="list-group-item align-left"><SocialIcon url='https://www.linkedin.com/in/omar-mata' bgColor="#343A40"/> <span className="h4 ml-3">Connect with me on LinkedIn: https://www.linkedin.com/in/omar-mata/</span> </li>
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