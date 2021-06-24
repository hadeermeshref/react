import React, { Component,Fragment } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Portifolio from './Components/Portifolio/Portifolio.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Route, Switch,Redirect } from "react-router-dom"
class App extends Component {
  render() {
    return (
      <Fragment>
       
         <Navbar />
         <Home />
         <Switch>
          
           <Route path="/portifolio" component={Portifolio} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
           <Redirect from="/" to="/about"/>

         </Switch>
       
         <Footer />
         
      </Fragment>
    );
  }
}

export default App; 