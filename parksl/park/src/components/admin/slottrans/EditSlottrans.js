import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";


const EditSlottrans = (props) => {


    const history = useHistory();
    const [slottransInput, setSlottransInput] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);


    useEffect(() => {

        const slottrans_id = props.match.params.id;
        axios.get(`/api/edit-slottrans/${slottrans_id}`).then(res => {
            if (res.data.status === 200) {
                setSlottransInput(res.data.slottrans);
            }
            else if (res.data.status === 404) {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-slottrans");
            }
            setLoading(false);
        });
    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setSlottransInput({ ...slottransInput, [e.target.name]: e.target.value });
    }


    const updateSlottrans = (e) => {
        e.preventDefault();

        const slottrans_id = props.match.params.id;
        const data = slottransInput;
        axios.put(`/api/update-slottrans/${slottrans_id}`, data).then(res => {
            if(res.data.status === 200) 
            {
                swal("Success!", res.data.message, "success");
                setError([]);
            }
            else if(res.data.status === 422)
            {
                swal("Fields Are Madaetory!","", "error");
                setError(res.data.errors);
            }
            else if (res.data.status === 404) 
            {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-slottrans");
            }

        });
    }


    if(loading)
    {
        return <h4>Loading...</h4>
    }



    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Slot Transaction
                        <Link to="/admin/view-slottrans" className="btn btn-primary btn-sm float-end">Back</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form onSubmit={updateSlottrans}>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>


                            <div className="form-group mb-3">
                                <label>Slot ID</label>
                                <input type="text" name="slot_id" className="form-control" value={slottransInput.slot_id} onChange={handleInput} />
                                <small className="text-danger">{error.slot_id}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label>Vehicle ID</label>
                                <input type="text" name="vehicle_id" className="form-control" value={slottransInput.vehicle_id} onChange={handleInput} />
                                <small className="text-danger">{error.vehicle_id}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>License No</label>
                                <input type="text" name="lc_number" className="form-control" value={slottransInput.license_no} onChange={handleInput} />
                                <small className="text-danger">{error.lc_number}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Start Date and Time</label>
                                <input type="datetime-local" name="start_date_time" className="form-control" value={slottransInput.start_date} onChange={handleInput} />
                                <small className="text-danger">{error.start_date}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>End Date and Time</label>
                                <input type="datetime-local" name="end_date_time" className="form-control" value={slottransInput.end_date} onChange={handleInput} />
                                <small className="text-danger">{error.end_date}</small>
                            </div> 

                        </div>

                        <button type="submit" className="btn btn-primary px-4 float-end">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditSlottrans;