import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <header className="header cont-shadow" style={{width: '96rem', backgroundColor: 'white'}}>
        <div className="logos">
            <Link to='/'><a>W <span className="logos-o">O</span>W Keep<span className="logos-excla">!</span></a></Link>
        </div>
        <ul className="header-nav">
            <li>
                <a href="https://github.com/MuskanChhatrasal">
                    <i className="bi bi-github github-icon"></i>
                    Github
                </a>
            </li>
            <li>
                <button className="menu">
                    <i className="bi bi-list"></i>
                </button>
            </li>
        </ul>
    </header>
  )
}

export default Navbar