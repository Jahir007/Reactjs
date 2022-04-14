import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


const ViewGuest = () => {

    const [loading, setLoading] = useState(true);
    const [guestlist, setGuestList] = useState([]);

        useEffect(() => {

            axios.get('api/view-guest').then(res => {
                // console.log(res.data.guest);
                if(res.status === 200)
                {
                    setGuestList(res.data.guest);
                }
                setLoading(false);
            });
    },[]);


    const deleteGuest = (e, id) => {
        e.preventDefault();

        const thisClick = e.currentTarget;
        thisClick.innerText = 'Deleting...';

        axios.delete(`/api/delete-guest/${id}`).then(res => {
            if(res.status === 200)
            {
               swal("Success!", res.data.message, "success");
               thisClick.closest('tr').remove();
            }
            else if (res.data.status === 404)
            {
                thisClick.innerText = 'Deleting...';
            }
        });
    
    }




    var viewguest_HTML_TABLE = "";

    if(loading)
    {
        return <h4>Loading Guest....</h4>
    }
    else
    {
        viewguest_HTML_TABLE = 
        guestlist.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.guest_name}</td>
                    <td>{item.lc_number}</td>
                    <td>{item.duration}</td>
                    <td>{item.slot_id}</td>
                    <td>{item.start_date}</td>
                    <td>{item.remarks}</td>
                    <td>
                        <Link to={`edit-guest/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button"  onClick={ (e)=> deleteGuest(e, item.id)}  className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        })
    }


    return (
        <div className="container px-4">
            <div className="card">
                <div className="card-header">
                    <h4>Guest List
                        <Link to="/admin/add-guest" className="btn btn-primary btn-sm float-end">Add Guest</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Guest Name</th>
                                <th>License No</th>
                                <th>Duration</th>
                                <th>Slot ID</th>
                                <th>Start Date</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewguest_HTML_TABLE}
                        </tbody>
                    </table>
                </div>            

            </div>
        </div>

    )
}

export default ViewGuest;