import React, { Component } from 'react';
import './dish.css';

import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { Route } from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import { Link } from 'react-router-dom';
import ModalComponent from "./ModalComponent";



 class DishDetailComponent extends Component
{
constructor(props)
{
super(props);
this.renderComments=this.renderComments.bind(this);
}


renderComments(){
  // const com=JSON.stringify(this.props.dishes.comments); 
const comm = this.props.dishes.comments.map((com)=>
{return(
<div >

<div>
{com.comment}
</div> 
<div>
 <p>-- {com.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(com.date))}
                    </p>
                    </div> 
</div> 
);}
);


return(

<div className="comments_body">
<h3 className="comments">Comments:</h3>
<div className="comments_content">
  {comm}
</div>
</div> 
);
}



render(){
  
return(
    <div className="whole_dish">
      <Breadcrumb>
        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
        <BreadcrumbItem active>{this.props.dishes.name}</BreadcrumbItem>
      </Breadcrumb>

      <div className="row">
        <div  className="col-12 col-md-5 m-1">
            <Card className="card">
              <CardImg top src={'../'+this.props.dishes.image} alt={this.props.dishes.name} />
              <CardBody>
                  <CardTitle>{this.props.dishes.name}</CardTitle>
                  <CardText>{this.props.dishes.description}</CardText>
              </CardBody>
            </Card>
        </div>

        

          <div  className="col-12 col-md-5 m-1" id="comment_id">
          <CardBody>
                  <CardText>            
            {this.renderComments()}
            </CardText>
          </CardBody>
          <div className="modal_component">
            <ModalComponent />
           </div>          
          </div>
      </div>
    </div>
);
}

}

export default DishDetailComponent;




