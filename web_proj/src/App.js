import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Owner from './components/pages/Owner';
import Booking from './components/pages/Booking';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Login from './components/pages/Login/Login';
import Guest from './components/pages/Guest';
import Signup from './components/pages/signup/Signup';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/Owner'  exact component={Owner} />
          <Route exact path='/Guest' exact component={Guest} />
          <Route exact path='/Booking'  exact component={Booking} />
          <Route exact path='/About'  exact component={About} />
          <Route exact path='/ContactUs'  exact component={ContactUs} />
          <Route exact path='/Signup' exact component={Signup} />
          <Route exact path='/Login'  exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
