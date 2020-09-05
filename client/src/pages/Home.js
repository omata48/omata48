import React from 'react';
import Headshot from '../utils/images/headshot.png'
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
                    <img className="float-left mr-2 mb-2" src={Headshot} style={{width:"15.75rem",height: "15.625rem"}} alt="Omar" />
                    <p className="card-text">Full stack web developer leveraging an architectural education to build more intuitive user experiences through progressive web applications. Achieved a certificate in Full Stack Web Development from The University of Texas at Austin. Skilled in JavaScript, CSS, React.js, Node.js, and responsive application design.</p>
                    <p className="card-text">Strengths are that I am constantly learning, a creative problem solver, self-motivating, and a rigorous worker.</p>
                    <p className="card-text">My latest project, Dog Daily, helps demonstrate the intuitive user design that I focus on creating. Creating the application as mobile-first, the UI is efficient in its layout, having enough parts to provide for the functionality of the intended use. My analytical problem solving skills combined with strength in collaborating across diverse groups makes me a valuable addition to any team.</p>
                </div>
            </div>
        </section>
    )
}

export default Home;