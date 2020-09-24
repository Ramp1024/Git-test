import React, {Component} from 'react'
import { Form, Label, Row, Col, FormGroup, Input, Button } from "reactstrap";
import "./Feedback.css"

class FeedbackForm extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <FormComponent />
        )
    }
}

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) =>{
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class FormComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName : null,
            lastName: null,
            mobNo : null,
            email: null,
            feedback : null,
            errors: {
                firstName: '',
                lastName: '',
                mobNo : '',
                email: '',
                feedback : ''
            }
        }
    }

    handleChange = (event) =>{
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch(name){
            case 'firstName':
                errors.firstName=
                    value.length < 3
                        ? 'First Name must be atleast 3 characters long'
                        : '';
                break;
            case 'lastName':
                errors.lastName = 
                    value.length < 3
                        ?'Last Name must be atleast 3 characters long'
                        : '';
                    break;
            case 'mobNo':
                errors.mobNo =
                    value.length > 10
                    ? ''
                    : 'Mobile number must be 10 characters long';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                    ? ''
                    :'Not a valid email address'+ 'Your email address should be of the specified format';
                break;
            case 'feedback':
                errors.feedback=
                    value.feedback < 15
                    ? 'Feedback must be atleast 15 letters long'
                    : 'Thank You for your feedback'
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value});
    }

    handleSubmit=(event) =>{
        event.preventDefault();
        if(validateForm(this.state.errors)){
            console.info('Valid Form')
        }else{
            console.info('Invalid Form')
        }
    }

    render(){
        const {errors} = this.state;
        return(
            <div className="container">
                <div className="whole_feedback">
                <h2 className="feedback_title">Your Feedback:</h2>
                <Form onSubmit={this.handleSubmit} noValidate>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='firstName'>First Name</Label>
                                <Input type='text' name='firstName' onChange= {this.handleChange} noValidate />
                                {errors.firstName.length > 0 &&
                                    <span className='error'>{errors.firstName}</span>}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='lastName'>Last Name</Label>
                                <Input type='text' name='lastName' onChange= {this.handleChange} noValidate />
                                {errors.lastName.length>0 &&
                                    <span className='error'>{errors.lastName}</span>}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                    <Label for='mobNo'>Mobile/Phone No.</Label>
                                    <Input type='text' name='mobNo' onChange= {this.handleChange} noValidate />
                                    {errors.mobNo.length>0 &&
                                        <span className='error'>{errors.mobNo}</span>}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                    <Label for='feedback'>Your Feedback</Label>
                                    <Input type='textarea' name='feedback' onChange= {this.handleChange} noValidate />
                                    {errors.feedback.length>0 &&
                                        <span className='error'>{errors.feedback}</span>}
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="submit">
                        <Button className="submit_button">Submit</Button>
                    </div>
                </Form>
            </div>
            </div>
        )
    }
}

export default FeedbackForm;
