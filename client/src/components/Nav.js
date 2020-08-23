import React from 'react';
import icon from '../utils/images/simpleIcon.png'
import {Link, useLocation} from 'react-router-dom'

function Nav() {
    let location = useLocation();
    console.log(location)

    const active = (navname) =>{
        let path = location.pathname
        if (path === '/'){
            path = '/home'
        }
        console.log(path===navname)
        return path === navname
    }

    return (
        <nav className="nav navbar-dark bg-dark">
            <Link className="navbar-brand ml-4 mr-2" to="/">
                <img src={icon} width="40" height="40" alt="icon" loading="lazy" />
            </Link>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/home" style={active('/home') ?{color: "#ffffff"} : {color:"lightblue"} }>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio" style={active('/portfolio') ?{color: "#ffffff"} :{color:"lightblue"}}>Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact" style={active('/contact') ?{color: "#ffffff"} :{color:"lightblue"}}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;