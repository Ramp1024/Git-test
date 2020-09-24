import React, { Component } from 'react'
import "./Home.css"
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link, Route } from 'react-router-dom';
import HomeCardComponent from "./HomeCardComponent";
import ContactsIcon from '@material-ui/icons/Contacts';
import Testimonials from './Testimonials';



 
class Home extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Niconne&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@600&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@600&family=Oswald:wght@700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,500&display=swap');
                </style>  
            <div className="whole_home">
                <div  
                    className="background_image"
                    ></div>
                <div className="welcome_card">
                    <p className="welcome_content">A Feast for your senses</p>
                    <p className="description">Prepared by the hands of our own chefs, with expertise and care, purely with the motive of making you crave for more... :) </p>
                </div>
                <div className="home_tiles">
                <div className="tiles">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <Link to='/menu' className='link_name' >
                            <div className="menu_tile">
                                <span>Menu<br></br>
                                    A wide range of dishes that make you crave for more
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <a href="https://goo.gl/maps/P1fv6MLyUBLf9TUF9" target="_blank">
                            <div className="map_tile">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.206664506394!2d-124.17295588464397!3d40.80145217932226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d15564193c9d0f%3A0x1c6fe165c342df9d!2s23%20US-101%2C%20Eureka%2C%20CA%2095501%2C%20USA!5e0!3m2!1sen!2sin!4v1600753438149!5m2!1sen!2sin" ></iframe>
                            <span>Map</span>
                            </div>
                        </a>
                    </div>
                    <div className="medium_testimonials">
                        <Testimonials />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="whole_sidecard">
                    <div className="days_card">
                        <h2 className="open_title">Real. Good. Food.</h2>
                        <div className="brunch">
                            <h5 className="brunch_title">Brunch</h5>
                            <p className="brunch_timings">Saturday: 11am-2pm</p>
                        </div>
                        <div className="dinner">
                            <h5 className="dinner_title">Dinner</h5>
                            <p className="dinner_timings">Monday-Thursday: 5pm-10pm<br></br>
                            Friday-Saturday: 4pm-11pm</p>
                        </div>
                        <div className="happy_hour">
                            <h5 className="happy_title">Happy Hour</h5>
                            <p className="happy_timings">Monday-Thursday: 5pm-6pm<br></br>
                            Friday-Saturday: 2pm-4pm</p>
                        </div>
                        <div className="contacts_div">
                            <Link to='/contact' className='link_name'>
                                            <p className="contact_flex">
                                                <ContactsIcon />
                                                <li>Contact Us</li>
                                            </p>
                            </Link>
                        </div>
                    </div>
                    <div className="offer">
                        <h2 className="services">Our Services</h2>
                        <h2 className="offer_header">What We Offer</h2>
                        <div className="total_offer_content">
                            <div className="private">
                                <h5 className="">Private Dining</h5>
                                <p className="">Saturday: 11am-2pm</p>
                            </div>
                            <div className="catering">
                                <h5 className="">Catering</h5>
                                <p className="">Monday-Thursday: 5pm-10pm<br></br>
                                Friday-Saturday: 4pm-11pm</p>
                            </div>
                            <div className="banquets">
                                <h5 className="">Banquets</h5>
                                <p className="">Monday-Thursday: 5pm-6pm<br></br>
                                Friday-Saturday: 2pm-4pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}


export default Home;