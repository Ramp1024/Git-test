import React,{ Component } from 'react';
import Header  from './Components/Header';
import Menu from './Components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from "./Components/Home";
import DishdetailComponent from "./Components/DishdetailComponent";



class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      dishes:DISHES
    };


  }

  render(){

    return (
        <div className="whole-div">
          <div className="header">
            <Header />
          </div>
          <div className="route">
                <div className="route_contact">
                  <Route  className="contact" path='/contact' exact> 
                    <Contact />
                  </Route>
                </div>
                <div className="route_menu">
                  <Route className="menu" path='/menu' exact>
                    <Menu dishes={this.state.dishes} /> 
                  </Route>
                </div>
                  <div className="route_about">
                    <Route path='/about' exact>
                      <About />
                    </Route>
                  </div>
                  <div className="route_home">
                    <Route path='/' exact >
                      <Home />
                    </Route>
                  </div>
                  <div className="route_dish">
                  {DISHES.map(dish=>
                    <Route path={'/menu/' + dish.name} exact>
                    <DishdetailComponent dishes={dish}/>
                  </Route>
                  )}
                  </div>
            </div>          
          <div className="footer">
            <Footer />
          </div>
          </div>     
    );
  }
}


export default App;
