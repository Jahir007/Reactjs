import React from "react";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from 'sweetalert';

const EditGuest = (props) => {

    const history = useHistory();

    const [slottranslist, setSlottranslist] = useState([]);
    const [guestInput, setGuest] = useState({

        type_id: '',
        guest_name: '',
        lc_number: '',
        duration: '',
        start_date: '',
        charge: '',
        image: '',
        remarks: '',
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
        axios.get('/api/all-slottrans').then(res => {
            if (res.data.status === 200) {
                setSlottranslist(res.data.slottrans);
            }

        });

    
        const guest_id = props.match.params.id;

        axios.get(`/api/edit-guest/${guest_id}`).then(res => {
            if (res.data.status === 200) {
                
                // console.log(res.data.guest);
                setGuest(res.data.guest);
            }
            else if (res.data.status === 404) 
            {
                swal("Error", res.data.message, "error");
                history.push("/admin/view-guest");
            }

            setLoading(false);
        });


    }, [props.match.params.id, history]);


    const updateGuest = (e) => {
        e.preventDefault();

        const guest_id = props.match.params.id;

        const formData = new FormData();
        formData.append('type_id', guestInput.type_id);
        formData.append('guest_name', guestInput.guest_name);
        formData.append('lc_number', guestInput.lc_number);
        formData.append('duration', guestInput.duration);
        formData.append('start_date', guestInput.start_date);
        formData.append('charge', guestInput.charge);
        formData.append('image', picture.image);
        formData.append('remarks', guestInput.remarks);

        axios.post(`/api/update-guest/${guest_id}`, formData).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");         

                setError([]);

            }
            else if (res.data.status === 422) {
                swal("All Fields Madaetory", "", "error");
                setError(res.data.errors);
            }
            else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                history.push("/admin/view-guest");
            }

        });
    }

    if(loading)
    {
        return <h4>Edit Guest Data Loading....</h4>
    }



    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Guest
                        <Link to="/admin/view-guest" className="btn btn-primary btn-sm float-end">View Guest</Link>
                    </h4>
                </div>
                <div className="card-body">



                    <form encType="multipart/form-data" onSubmit={updateGuest} id="GUEST-FORM" >
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>


                            <div className="form-group">
                                <label>Select Type</label>
                                <select name="type_id" onChange={handleInput} value={guestInput.type_id} className="form-control">
                                    <option value="">Select Guest Type</option>
                                    {
                                        slottranslist.map((item) => {
                                            return (
                                                <option value={item.id} key={item.id}>{item.type_id}</option>
                                            )
                                        })
                                    }
                                </select>
                                <small className="text-danger">{errorlist.type_id}</small>
                            </div>
                            
                            <div className="form-group mb-3">
                                <label>Guest Name</label>
                                <input type="text" name="guest_name" onChange={handleInput} value={guestInput.guest_name} className="form-control" ></input>
                                <small className="text-danger">{errorlist.guest_name}</small>
                            </div>


                            <div className="form-group mb-3">
                                <label>License Number</label>
                                <input type="text" name="lc_number" onChange={handleInput} value={guestInput.lc_number} className="form-control" ></input>
                                <small className="text-danger">{errorlist.lc_number}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Image</label>
                                <input type="file" name="image" onChange={handleImage} className="form-control" ></input>
                                <img src={`http://localhost:8000/${guestInput.image}`} width="60px" alt={guestInput.guest_name} />
                                <small className="text-danger">{errorlist.image}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Duration</label>
                                <input type="number" name="duration" onChange={handleInput} value={guestInput.duration} className="form-control" placeholder="In Hour" ></input>
                                <small className="text-danger">{errorlist.duration}</small>
                            </div>

                            


                            <div className="form-group mb-3">
                                <label>Slot ID</label>
                                <input type="number" name="slot_id" onChange={handleInput} value={guestInput.slot_id} className="form-control" ></input>
                                <small className="text-danger">{errorlist.slot_id}</small>
                            </div>
                            
                            <div className="form-group mb-3">
                                <label>Start Date</label>
                                <input type="date" name="start_date" onChange={handleInput} value={guestInput.start_date} className="form-control" ></input>
                                <small className="text-danger">{errorlist.start_date}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Charge</label>
                                <input type="text" name="charge" onChange={handleInput} value={guestInput.charge} className="form-control" ></input>
                                <small className="text-danger">{errorlist.charge}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Remarks</label>
                                <input type="text" name="remarks" onChange={handleInput} value={guestInput.remarks} className="form-control" ></input>
                                <small className="text-danger">{errorlist.remarks}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Status</label>
                                <select name="status" onChange={handleInput} value={guestInput.status} className="form-control">
                                    <option value="">Select Status</option>
                                    <option value="0">Active</option>
                                    <option value="1">Inactive</option>
                                </select>
                                <small className="text-danger">{errorlist.status}</small>
                            </div>


                        </div>

                        <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditGuest;