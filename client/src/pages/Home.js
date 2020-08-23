import React from 'react';
import Headshot from '../utils/images/Headshot.jpg'
import image from "../utils/images/japan.jpg"

function Home(){
    return(
        <section id="bodyMain">
            <div className="jumbotron mb-1" style={{background:`url(${image})`,backgroundSize:'cover',height:"350px"}}>
                <h1 className="display-4">Omar Mata's Portfolio</h1> 
            </div>
            <div className="card border-light">
                <div className="card-body">
                    <h1 className="card-title">Brief Summary</h1>
                    <img className="float-left mr-2 mb-2" src={Headshot} style={{width:"18.75rem",height: "15.625rem"}} alt="Omar" />
                    <p className="card-text">Full stack web developer leveraging an architectural education to build more intuitive user experiences with progressive web applications. Currently developing skills in JavaScript, CSS, React.js, Node.js, and responsive application design while achieving a certificate in full stack development from The University of Texas at Austin.</p>
                    <p className="card-text">Strongest skills are centered on driven problem solving of code to develop mobile responsive products. Each project produced is intended to have both an easy to use interface, but also follow object oriented programming.</p>
                    <p className="card-text">I applied this style of development in a recent project that helps users receive their daily horoscope. After signing up, all the information is produced for the users automatically, not requiring any more input from the user. My analytical problem solving skills combined with strength in collaborating across diverse groups makes me a valuable addition to any team.</p>
                </div>
            </div>
        </section>
    )
}

export default Home;