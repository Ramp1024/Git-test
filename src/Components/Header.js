import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, NavbarBrand, NavLink } from 'reactstrap';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
 


class Header extends Component{
    constructor(){
        super();
    }

    render(){
          
        return(
            <div>
                <Navbar className="navbar">
                    <div className="header">
                        <NavbarBrand href="/">Nous les meilleurs</NavbarBrand>
                    </div>
                    <div 
                            className="logo_image"
                            alt="Logo-Image"
                        ></div>
                    <NavLink>
                        <Router>
                            <nav>
                                <ul className="nav-links">
                                    <Link className='link' to='/'>
                                            <p className="link_flex">
                                                <HomeIcon />
                                                <li>Home</li>
                                            </p>
                                    </Link>
                                    <Link className='link' to='/menu'>
                                            <p className="link_flex">
                                                <RestaurantMenuIcon />
                                                <li>Menu</li>
                                            </p>
                                    </Link>
                                    <Link className='link 'to='/about'>
                                            <p className="link_flex">
                                                <InfoIcon />
                                                <li>About</li>
                                            </p>
                                    </Link>
                                    <Link className='link' to='/contact'>
                                            <p className="link_flex">
                                                <ContactsIcon />
                                                <li>Contact Us</li>
                                            </p>
                                    </Link>
                                </ul>
                            </nav>
                        </Router>
                    </NavLink>
                </Navbar>
            </div>
        );
    }
}

export default Header;