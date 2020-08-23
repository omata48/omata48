import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return (
        <section id="bodyMain" className="container my-5 d-flex">
            <div className="card border-light col-12">
                <div className="card-body">
                    <header className="mb-1"><h1>Get in touch:</h1></header>
                    <hr style={{ border: "2px solid grey" }} className="mb-4" />
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <span className="h4 mr-2">Send me an email:</span> <SocialIcon url='mailto:omata48@outlook.com?subject=Hello Omar (portfolio)' bgColor="#343A40" /></li>
                        <li className="list-group-item"> <span className="h4 mr-2">My Projects on Github:</span> <SocialIcon url='https://github.com/omata48' bgColor="#848484" /></li>
                        <li className="list-group-item"> <span className="h4 mr-2">Connect with me on LinkedIn:</span> <SocialIcon url='https://www.linkedin.com/in/omar-mata' bgColor="#343A40"/></li>
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