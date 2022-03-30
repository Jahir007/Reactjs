import React, { useState, useEffect } from 'react'  
import Axios from 'axios';  

const Slotpay = () => {

    const [data, setData] = useState([]);  
  
    useEffect(() => {  
        debugger;  
        Axios  
            .get("http://localhost/Reactjs/parkportal/src/Api/inert.php")  
            .then(result => setData(result.data));  
        console.log(data);  
        debugger;  
    }, []);  
    return (  
        <div>  
            <div className="row" style={{ 'margin': "10px" }}>  
                <div className="col-sm-12 btn btn-info">  
                    <h2>Payment</h2> 
                 </div>  
            </div>  
            <table class="table" >  
                <thead class="thead-dark">  
                    <tr>  
                        <th scope="col">Name</th>  
                        <th scope="col">Age</th>  
                        <th scope="col">Address</th>  
                        <th scope="col">City</th>  
                        <th scope="col">Salary</th>  
                        <th scope="col">Department</th>  
                    </tr>  
                </thead>  
                <tbody>  
                    {data.map(item => {  
                        return <tr key={item.Id}>  
                            <td>{guest.firstname}</td>  
                            <td>{guest.lcno}</td>  
                            <td>{guest.Address}</td>  
                            <td>{guest.City}</td>  
                            <td>{guest.Salary}</td>  
                            <td>{guest.Department}</td>  
                        </tr>  
                    })}  
                </tbody>  
            </table>  
  
        </div>  
    )  
}  
  
export default Slotpay