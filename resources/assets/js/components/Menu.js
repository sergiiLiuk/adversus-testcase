import React, { Component } from 'react';
import logo from '../../images/logo.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Menu = props => (
    <Router>
        <nav className="nav-bar">   
            <ul>   
                <li className="app-logo">
                    <img src={logo} alt="logo"/>
                </li>               
                <li>
                    <a href="#"><i className="fas fa-phone"></i></a>
                </li>
                <li>
                    <a href="#"><i className="far fa-calendar"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-window-restore"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fab fa-bitbucket"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-briefcase"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-microphone"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-cog"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-map-marker-alt"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-user"></i></a>     
                </li> 
                <li>                  
                    <a href="#"><i className="fas fa-map-marker-alt"></i></a>
                </li>
            </ul>
        </nav>
    </Router>
);

export default Menu;