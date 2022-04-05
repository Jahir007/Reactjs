import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ViewOwner = () => {

    const [loading, setLoading] = useState(true);
    const [ownerlist, setOwnerList] = useState([]);

        useEffect(() => {

            axios.get('api/view-owner').then(res => {
                // console.log(res.data.owner);
                if(res.status === 200)
                {
                    setOwnerList(res.data.owner);
                }
                setLoading(false);
            });
    },[]);

    var viewowner_HTML_TABLE = "";

    if(loading)
    {
        return <h4>Loading Owner....</h4>
    }
    else
    {
        viewowner_HTML_TABLE = 
        ownerlist.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.contactno}</td>
                    <td>{item.email}</td>
                    <td>{item.status}</td>
                    <td>
                        <Link to={`edit-owner/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        })
    }


    return (
        <div className="container px-4">
            <div className="card">
                <div className="card-header">
                    <h4>Owner List
                        <Link to="/admin/add-owner" className="btn btn-primary btn-sm float-end">Add Owner</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact No</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewowner_HTML_TABLE}
                        </tbody>
                    </table>
                </div>            

            </div>
        </div>

    )
}

export default ViewOwner;