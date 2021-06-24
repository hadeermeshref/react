import React, { Component,Fragment } from 'react'
import Style from "./Navbar.module.css"
import {Link} from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
            <Fragment>

  <nav className={ `${Style.main} navbar navbar-expand-lg navbar-dark py-4 ` }  >
  <div className="container">
  <a className="navbar-brand " href="#">START REACT</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item">
        <Link className="nav-link" to="/portifolio">PORTIFOLIO</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/about">ABOUT</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/contact">CONTACT</Link>
      </li>
    
     
    </ul>
    
  </div>
  </div>
</nav>
            </Fragment>
        )
    }
}
