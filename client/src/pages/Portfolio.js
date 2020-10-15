import React from "react";
import "./style.css";
import ProjectCard from "../components/ProjectCard";

// images to use
import QCorner from "../utils/images/projects/QCorner.png";
import SCOPE from "../utils/images/projects/SCOPE.png";
import dogDaily from "../utils/images/projects/dogDaily.png"
// import Weather from "../utils/images/projects/weatherApp.png";
// import employeeTracker from "../utils/images/excercises/employeeTracker.png";
import budgetTracker from "../utils/images/excercises/budgetTracker.png";

// all project images
// import passwordGen from "../utils/images/excercises/passwordGen.png";
// import codingQuiz from "../utils/images/excercises/codingQuiz.png";
// import calendar from "../utils/images/excercises/calendar.png";
// import readmeGen from "../utils/images/excercises/readmeGen.png";
// import htmlRender from "../utils/images/excercises/htmlRender.gif";
// import noteTaker from "../utils/images/excercises/noteTaker.png";
// import workoutTracker from "../utils/images/excercises/workoutTracker.png";
// import employeeDirectory from "../utils/images/excercises/employeeDirectory.gif";


function Portfolio() {

    return (
        <section id="bodyMain" className="container my-5">
            <div className="card border-light mb-5">
                <div className="card-body">
                    <h1 className="mb-1">Projects</h1>
                    <hr style={{ border: "2px solid grey" }} className="mb-4" />
                    <div className="row row-cols-1 row-cols-sm-2 card-deck">
                        <ProjectCard 
                            title="Dog Daily"
                            pageLink="https://puppers-daily.herokuapp.com/"
                            imgLink={dogDaily}
                            description="Web application focused on the daily interactions with your dogs. This application provides users the ability to add pets to profiles they create. Users can also mark when they feed their pets."
                            skills="HTML5, CSS, React, mySQL, Express, Node.js, React-Bootstrap, Axios"
                            repoLink="https://github.com/omata48/Puppers-Daily"
                        />
                        <ProjectCard 
                            title="Quarantine Corner"
                            pageLink="https://abtree46.github.io/project1/"
                            imgLink={QCorner}
                            description="Curated children’s site with activities to keep younger audiences entertained. Contains educational content, animal GIFs and filtered DIY videos from Youtube"
                            skills="HTML5, CSS(Bootstrap), JS, jQuery, AJAX, Node.js"
                            repoLink="https://github.com/abtree46/project1"
                        />
                        {/* <ProjectCard 
                            title="Weather Dashboard"
                            pageLink="https://omata48.github.io/Weather-Dashboard/" 
                            imgLink={Weather} 
                            description="Web application to view weather outlook for a city searched by a user. Connects with Open Weather API to provide the data to the user."
                            skills="HTML5, Bootstrap, AJAX, jQuery, Node.js"
                            repoLink="https://github.com/omata48/Weather-Dashboard"
                        /> */}
                        <ProjectCard
                            title="SCOPE"
                            pageLink="https://scope-g1.herokuapp.com"
                            imgLink={SCOPE}
                            description="Horoscope application where users can create their own account to track their daily horoscope. Users are also able to compare two horoscopes in order to retrieve their compatibility.
                            To test the application, you can use the username and password : asdf"
                            skills="HTML5, CSS, Bootstrap, AJAX, Axios, Express, Node.js, Sessions"
                            repoLink="https://github.com/mmeleen/scope"
                        />
                        {/* <ProjectCard 
                            title="Employee Tracker"
                            imgLink={employeeTracker}
                            description="Terminal run application for someone to easily interact with information stored in databases. This solution is specifically geared towards a organization that works from departments, to roles, to employees."
                            skills="Command Line (Terminal), mySQL, Node.js, JS, HTML5, mySQL"
                            repoLink="https://github.com/omata48/Employee-Tracker"
                        /> */}
                        <ProjectCard 
                            title="Budget Tracker"
                            pageLink="https://shrouded-beyond-40899.herokuapp.com/"
                            imgLink={budgetTracker}
                            description='Budget application with offline access and functionality. User is able to keep track of deposits and expenses regardless of having a connection to the internet. The application can also be installed by users utilizing Google Chrome or on a mobile device'
                            skills='MongoDB(mongoose), Express, PWA, Offline Capabilities, Node.js, JS, HTML5'
                            repoLink='https://github.com/omata48/PWA-HW'
                        />
                    </div>
                </div>
            </div>
            {/* Section for excercises */}
            {/* <div className="card border-dark">
                <div className="card-body">
                    <h1 className="mb-1">Excercises</h1>
                    <hr style={{ border: "2px solid grey" }} className="mb-4" />
                    <ul className="list-group list-group-flush w-100 text-left" >
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={readmeGen} className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">README Generator</h5>
                                        <p className="card-text">Creating a project always requires one item: a README document. This document is crucial to explain to potential users what an application is about and how to use it. This application helps a user create a README file in markdown by only interacting with the terminal.</p>
                                        <p className="card-text"><small className="text-muted">Command Line, Node.js, JS</small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={calendar} className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Daily Planner</h5>
                                        <p className="card-text">Web Page that utilizes data from an external API (Moment) to create a calendar that can store data and tracks past, present and later time with color coding.</p>
                                        <p className="card-text"><small className="text-muted">HTML, CSS, Local Storage, jQuery</small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={employeeDirectory} className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Employee Directory</h5>
                                        <p className="card-text">Application to show list of employees to manager. Gives the option to sort the list of empoloyees by First name or to filter the list by job titles that contain "Engineer". If the manager wishes to revert the filters, they can reset the list to the original employee list.</p>
                                        <p className="card-text"><small className="text-muted">React, React.js</small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={budgetTracker} className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Budget Tracker</h5>
                                        <p className="card-text">Budget application with offline access and functionality. User is able to keep track of deposits and expenses regardless of having a connection to the internet. The application can also be installed by users utilizing Google Chrome or on a mobile device</p>
                                        <p className="card-text"><small className="text-muted">MongoDB(mongoose), Express, PWA, Offline Capabilities, Node.js, JS, HTML5</small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={workoutTracker} className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Workout Tracker</h5>
                                        <p className="card-text">Application to keep track of workouts for the week. Users are able to enter workout information and keep track of it or continue previous workouts.</p>
                                        <p className="card-text"><small className="text-muted">MongoDB(mongoose), Express, Node.js, JS, HTML5, </small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={employeeTracker} className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Employee Tracker</h5>
                                        <p className="card-text">Terminal run application for someone to easily interact with information stored in databases. This solution is specifically geared towards a organization that works from departments, to roles, to employees.</p>
                                        <p className="card-text"><small className="text-muted">Command Line (Terminal), mySQL,  Node.js, JS, HTML5, mySQL</small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={noteTaker} className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Note Taker</h5>
                                        <p className="card-text">A simple note taking app for users who have ideas they quickly need to jot down to reference later. Application deployed on heroku storing the notes on a local db.json file</p>
                                        <p className="card-text"><small className="text-muted">Node.js, JS, HTML5, Express, Heroku</small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={passwordGen} className="img-thumbnail" alt="password generator" />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Password Generator</h5>
                                        <p className="card-text">Website that will help the user receive a randomly generated password. This password is randomly generated based on criteria selected by the user. In order to select what will be included in the password, the user is prompted to answer a series of questions.</p>
                                        <p className="card-text"><small className="text-muted">HTML5, CSS, jQuery</small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={htmlRender} className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">HTML Renderer</h5>
                                        <p className="card-text">Using the terminal, a manager is quickly able to assemble an HTML page to display a roster of a given number of Engineers and Interns. Application uses inquirer to gather the user's input from the terminal, then generates an HTMl page that is exported to the output folder in the repository.</p>
                                        <p className="card-text"><small className="text-muted">Command Line, Node.js, JS, HTML5</small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={codingQuiz} className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Code Quiz</h5>
                                        <p className="card-text">Timed code quiz with multiple-choice questions. This app runs in the browser and features dynamically updated HTML and CSS with a database stored in the browser's local storage.</p>
                                        <p className="card-text"><small className="text-muted">HTML, CSS, Local Storage</small></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}
        </section>
    );
}

export default Portfolio