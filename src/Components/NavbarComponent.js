import React, { Component } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler } from "reactstrap";
import './NavbarComponent.css';
class NavbarComponent extends Component{
    constructor(){
        super();

        this.state= {
            isOpen: false
        };
    }

    render(){
        return(
            <div className="header_body">
                
            </div>
        );
    }
}

export default NavbarComponent;