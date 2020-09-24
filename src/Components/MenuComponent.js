import React, { Component } from 'react';
import Dish from './DishdetailComponent';
import './Menu.css';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import { Link, Route } from 'react-router-dom';

 
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }     


    render() {
        
        const menu = this.props.dishes.map((dish) => 
        <div className="col-md-6 col-sm-6 col-xs-1">
            <Link to ={'/menu/' +dish.name}>
                <Card >
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle className="card_text">{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
            </Link>
            <div>
               
            </div>
        </div>
        );

        return (
            <div className="whole_menu">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                        <div className="container">
                            <div className="row">
                                {menu}
                                </div>
                        </div>
            </div>
        );
    }
}

 
export default Menu;