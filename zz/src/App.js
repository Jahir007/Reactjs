import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Home from './Components/Components/Home'
import SignUp from './Components/Components/signup';
import Admin from './Components/Components/AdminComponent/admin';
import LocationDetail from './Components/Components/AdminComponent/locationDetail';
import User from './Components/Components/UserComponent/user';
import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';

class App extends Component {
    constructor(){
     super()
     this.state={
       user:null,
     }

    }


 componentDidMount(){
    firebase.auth().onAuthStateChanged(()=>{
      
      this.setState({
          user: firebase.auth().currentUser
      })
    })
  }
  render() {
    
    return (
      <div className="App">
        <Router>
          <div>
         <Route exact path="/" component ={Home}/>
         <Route path="/SignUp" component={SignUp}/> 
         <Route path="/Admin" component={Admin} />
         <Route path="/User" component={User} />
         <Route path="/User/LocationDetail" component={LocationDetail}/>
    
         
            <footer>
                   <p>Posted by: Jahir</p>
                   <p>Contact information: <a href="mailto:jahirk56@outlook.com">
                    jahirk56@outlook.com.</a></p>
              </footer>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
