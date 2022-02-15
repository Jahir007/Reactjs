import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as firebase from 'firebase'; 

import Paper from 'material-ui/Paper';

export default class MyFeedBack extends Component{
constructor(props){
    super(props);
    this.state={
       my_booking:[],
    }
}
componentDidMount(){
  firebase.auth().onAuthStateChanged(() => {
    if(firebase.auth().currentUser){
     var userId = firebase.auth().currentUser.uid;
       firebase.database().ref('Feedback/').orderByChild('UserId').equalTo(userId).on('value',snap => {
      var userobj=snap.val();
      var key = Object.keys(userobj);
      var feedback=[];
     let  query=''
      
    for(var i=0;i<key.length;i++){
        var k=key[i];
       if(userobj[k].UserId===userId){
            feedback.push({
                query:userobj[k].FeedBack
            })

       } 

       }
   this.setState({
       my_booking:feedback
   })
       })

      }
    })

}
DeleteSlot(index){
console.log("index value"+index)

// firebase.database().ref('Booking/'+index).remove();

}


render(){
    return(
            <div>           
              <MuiThemeProvider>
                  <div>
                    <h3>My Booking</h3>
                      { this.state.my_booking.map((item, index) => (
                       <div>
                    <Paper style={style} zDepth={4} rounded={false} id="abc" >
                   
                     <p> FeedBack : {item.query}</p> 
                    
                    </Paper>
                       </div>
                     ))}
                            
                </div>
            </MuiThemeProvider>
         </div>
  
  )}
}
const style = {
  width:1000,
  margin:5,
  display: 'inline-block',
   
};

