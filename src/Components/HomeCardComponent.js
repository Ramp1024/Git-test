import React, { Component } from 'react'
import Home from './Home';
import { Col } from "reactstrap";
import "./HomeCard.css"

class HomeCardComponent extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Col md={6}>
                <div className="card1">
                <div className="menu_background"></div>
                </div>
                <div className="content">
                <div className="title">Menu</div>
                <div className="sub-title">From the best chefs</div>
                <div className="bottom">Lorem ipsum............</div>
                </div>
            </Col>
        )
    }

}

export default HomeCardComponent;