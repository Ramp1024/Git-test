import React, {Component} from 'react';
import "./Contact.css";
import FeedbackForm from "./FeedbackForm";
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';
class Contact extends  Component{
  
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="whole_contact">
        <Breadcrumb>
        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/contact">Contact Us</Link></BreadcrumbItem>
      </Breadcrumb>
        <div className="location_title">Location</div>
        <div className="row">
          <div className=" col-md-6 col-sm-12 col-xs-12">
            <a href="https://goo.gl/maps/P1fv6MLyUBLf9TUF9" target="_blank">
                <div className="map_tile">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.206664506394!2d-124.17295588464397!3d40.80145217932226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d15564193c9d0f%3A0x1c6fe165c342df9d!2s23%20US-101%2C%20Eureka%2C%20CA%2095501%2C%20USA!5e0!3m2!1sen!2sin!4v1600753438149!5m2!1sen!2sin" ></iframe>
                            <span>Map</span>
                 </div>
            </a>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
              <Testimonials />
            </div>
        </div>
        <div className="container">
          <FeedbackForm />
        </div>
        
      </div>
    )
  }

}
export default Contact;