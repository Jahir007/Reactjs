import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";


const EditGuest = (props) => {


    const history = useHistory();

    const [guestInput, setGuest] = useState({

        guest_name: "",
        lc_number: "",
        image: "",
        duration: "",
        slot_id: "",
        start_date: "",
        charge: "",
        remarks: "",

    });

    const [picture, setPicture] = useState([]);
    const [errorlist, setError] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const handleInput = (e) => {
        e.persist();
        setGuest({ ...guestInput, [e.target.name]: e.target.value });
    }

    const handleImage = (e) => {
        setPicture({ image: e.target.files[0] });
    }


    useEffect(() => {

        const guest_id = props.match.params.id;
        axios.get(`/api/edit-guest/${guest_id}`).then(res => {
            if (res.data.status === 200) {
                setGuest(res.data.guest);
            }
            else if (res.data.status === 404) {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-guest");
            }
            setLoading(false);
        });
    }, [props.match.params.id, history]);

   


    const updateGuest = (e) => {
        e.preventDefault();

        const guest_id = props.match.params.id;
        
        const formData = new FormData();
        formData.append('guest_name', guestInput.guest_name);
        formData.append('lc_number', guestInput.lc_number);
        formData.append('image', picture.image);
        formData.append('duration', guestInput.duration);
        formData.append('slot_id', guestInput.slot_id);
        formData.append('start_date', guestInput.start_date);
        formData.append('charge', guestInput.charge);
        formData.append('remarks', guestInput.remarks);


        axios.put(`/api/update-guest/${guest_id}`, formData).then(res => {
            if(res.data.status === 200) 
            {
                swal("Success!", res.data.message, "success");

                setError([]);
            }
            else if(res.data.status === 422)
            {
                swal("All Fields Are Madaetory!","", "error");
                setError(res.data.errors);
            }
            else if (res.data.status === 404) 
            {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-guest");
            }

        });
    }


    if(loading)
    {
        return <h4>Edit Guest Data Loading...</h4>
    }



    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Guest
                        <Link to="/admin/view-guest" className="btn btn-primary btn-sm float-end">Back</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form encType="multipart/form-data" onSubmit={updateGuest} id="GUEST-FORM">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>


                            <div className="form-group mb-3">
                                <label>Guest Name</label>
                                <input type="text" name="guest_name" className="form-control" value={guestInput.guest_name} onChange={handleInput} />
                                <small className="text-danger">{errorlist.guest_name}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label>License No</label>
                                <input type="text" name="license_no" className="form-control" value={guestInput.license_no} onChange={handleInput} />
                                <small className="text-danger">{errorlist.license_no}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label>Image</label>
                                <input type="file" name="image" className="form-control" onChange={handleImage} />
                                <img src={`http://localhost:8000/${guestInput.image}`} width="60px" alt={guestInput.image} />
                                <small className="text-danger">{errorlist.image}</small>
                            </div>
                            <div className="form-group mb-3">
                                <label>Duration</label>
                                <input type="text" name="duration" className="form-control" value={guestInput.duration} onChange={handleInput} />
                                <small className="text-danger">{errorlist.duration}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label>Slot ID</label>
                                <input type="text" name="slot_id" className="form-control" value={guestInput.slot_id} onChange={handleInput} />
                                <small className="text-danger">{errorlist.slot_id}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label>Start Date</label>
                                <input type="date" name="start_date" className="form-control" value={guestInput.start_date} onChange={handleInput} />
                                <small className="text-danger">{errorlist.start_date}</small>
                            </div>
                            <div className="form-group mb-3">
                                <label>Charge</label>
                                <input type="text" name="charge" className="form-control" value={guestInput.charge} onChange={handleInput} />
                                <small className="text-danger">{errorlist.charge}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Remarks</label>
                                <input type="text" name="remarks" className="form-control" value={guestInput.remarks} onChange={handleInput} />
                                <small className="text-danger">{errorlist.remarks}</small>
                            </div>    

                        </div>

                        <button type="submit" className="btn btn-primary px-4 float-end">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditGuest;