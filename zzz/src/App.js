import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Owner from './components/pages/Owner';
import Booking from './components/pages/Booking';
import SignUp from './components/pages/SignUp';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Login from './components/pages/Login';
import Guest from './components/pages/Guest';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Owner' component={Owner} />
          <Route path='/Guest' component={Guest} />
          <Route path='/Booking' component={Booking} />
          <Route path='/About' component={About} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
