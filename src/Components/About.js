import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import {CHARACTERS} from './Character'
import CharacterComponent from './CharacterComponent';
import "./About.css";

function About(props) {

    return(
      <div className="whole_about">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="about_title">About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2 className="history_title">Our History</h2>
                    <p className="history_para1">Started in 2020, Nous les meilleurs quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p className="history_para2">The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEOs, Mr. Shyam Sundar, Mr. Roshan, Mr.Shakthi Ganesh, Mr. Manikandan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-6">
                    <Card>
                        <CardHeader className="card_facts">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">31 Aug. 2020</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Pentavalent Technologies</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">5</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Don't you just love it when you come back from the bathroom 
                                and find your food waiting for you?
                                </p>
                                <footer className="blockquote-footer">Mia Wallace,
                                <cite title="Source Title">From "Pulp Fiction" by Quentin Tarantino</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2 className="leader_title">Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    {CHARACTERS.map(character =>
                        <CharacterComponent character={character} />
                      )}
                </div>
            </div>
        </div>
      </div>
    );
}

export default About;    