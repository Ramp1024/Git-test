import React from 'react'
import { Link } from 'react-router-dom'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./Footer.css";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

 function Footer () {
    return(
        <div className='whole_footer'>
            <div className="footer">
            <div className="whole_links">
                    <div className='link_content'>
                        <div>
                            <Link to='/'className='link_name'>
                                            <p className="link_flex">
                                                <HomeIcon />
                                                <li>Home</li>
                                            </p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/menu' className='link_name' >
                                            <p className="link_flex">
                                                <RestaurantMenuIcon />
                                                <li>Menu</li>
                                            </p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/about' className='link_name'>
                                            <p className="link_flex">
                                                <InfoIcon />
                                                <li>About</li>
                                            </p>
                            </Link>
                        </div>
                        
                        
                    </div>
                </div>
                <div className='address'>
                    <h6 className="address_title">Our Address:</h6>
                    <p className="address_name">
                        101/23, Beverly Hills,
                        Los Angeles County,
                        California
                    </p>
                    <p className="zip_code">
                        Zip Code: 90209–90213
                    </p>
                </div>
                <div className='contacts'  >
                    <p><PhoneIcon className="icon"/> +91-8667207006</p>
                    <p><MailIcon className="icon"/> ramprakash1024@outlook.com</p>
                    <InstagramIcon className="icon"/>
                    <LinkedInIcon className="icon"/>
                    <TwitterIcon className="icon"/>
                </div>
            </div>
        </div>
    )
 }
 export default Footer