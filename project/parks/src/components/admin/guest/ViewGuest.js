import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import swal from 'sweetalert';


const ViewGuest = () => {


    const [viewGuest, setGuest] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('/api/view-guest').then(res => {
           if (res.data.status === 200)
              {
                setGuest(res.data.guests);
                setLoading(false);
              }
        });

    }, []);

    var display_Guestdata = "";

    if(loading)
    {
        return <h1>Loading View Guest...</h1>
    }   
    else
    {
        display_Guestdata = viewGuest.map( (item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.type_id}</td>
                    <td>{item.guest_name}</td>
                    <td>{item.lc_number}</td>
                    <td><img src={`http://localhost:8000/${item.image}`} width="60px" alt={item.lc_number} /></td>
                    <td>{item.duration} hours</td>
                    <td>{item.slot_id}</td>
                    <td>{item.charge}</td>
                    <td><Link to="edit-product" className="btn btn-success btn-sm">Edit</Link></td>
                    <td><button type="button" to="delete-product" className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            )
        });
    }


    return (
        <div className="card px-4 mt-3">
            <div className="card-header">
                <h4>View Guest
                    <Link to="/admin/add-guest" className="btn btn-primary btn-sm float-end">Add Guest</Link>
                </h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Type</th>
                                <th>Name</th>
                                <th>License No</th>
                                <th>Image</th>
                                <th>Duration</th>
                                <th>Slot ID</th>
                                <th>Charge</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {display_Guestdata}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewGuest;