import React, { useState, useEffect} from 'react'  
import Axios from 'axios';



    

const Slotpay = () => {

    const [data, setData] = useState([]);  
    useEffect(() => {  
        Axios  
            .get("http://localhost/Reactjs/parkportal/src/Api/view.php")
            .then(result => setData(result.data));  
        console.log(data);  
        
    });  
    return (  
        <div>  
            <div className="row" style={{ 'margin': "10px" }}>  
                <div className="col-sm-12 btn btn-info">  
                    <h2>Payment</h2> 
                 </div>  
            </div>  
            <table className="table" >  
                <thead className="thead-dark">  
                    <tr>  
                        <th scope="col">Name</th>  
                        <th scope="col">License Number</th>   
                        <th scope="col">Slot Number</th>   
                        <th scope="col">Start Date</th>  
                        {/* <th scope="col">Salary</th>  
                        <th scope="col">Department</th>   */}
                    </tr>  
                </thead>  
                <tbody>  
                    {data.map(guest => {  
                        return <tr key={guest.id}>  
                            <td>{guest.firstname}</td>  
                            <td>{guest.lcno}</td>  
                            <td>{guest.slotno}</td>   
                            <td>{guest.startdate}</td>   
                            {/* <td>{guest.Salary}</td>  
                            <td>{guest.Department}</td>   */}
                        </tr>  
                    })}  
                </tbody>  
            </table>  
  
        </div>  
    )  
}  
  
export default Slotpay


// import React from 'react';
// import { useState, useEffect} from 'react';
// // import './App.css';

// //bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// //Axios for get request
// import axios from 'axios';



// const Slotpay = () => {

//     const [data, setData] = useState([]);

    
//     useEffect(() => {
//         axios
//             .get("http://localhost/Reactjs/parkportal/src/Api/view.php")
//             .then(result => setData(result.data));
//         console.log(data);
//         debugger;
//     });

  
//     return (
     
//       <div className="maincontainer">
       
//         {/* <h1 className="mr-5 ml-5 mt-5">Therichpost.com</h1> */}
//         <div className="container mb-5 mt-5 text-left">
        
//         <table class="table table-hover">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Booking Id</th>
//               <th>Amount</th>
//               <th>License Number</th>
//               <th>Slot Number</th>
//             </tr>
//           </thead>

// {/*         
          
//           {this.state.data.map((guest) => {
//             return (
             
//                  <tr>
//                   <td>{guest.id}</td>
//                   <td>{guest.email}</td>
//                   <td>{guest.username}</td>
//                 </tr>
             
//             )
//           })} */}
           
        
          
//         </table>

       
            
//       </div>

     
//       </div>
     
// )
// };


// export default Slotpay;