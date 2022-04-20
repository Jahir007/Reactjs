import React from "react";
import axios from 'axios';
import { useState } from "react";
import swal from 'sweetalert';

const Slottrans = () => {


    const [slottransInput, setSlottrans] = useState({
        type_id: '',
        slot_id: '',
        vehicle_id: '',
        lc_number: '',
        start_date_time: '',
        end_date_time: '',
        slug: '',
        status: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setSlottrans({...slottransInput, [e.target.name]:e.target.value});
    }

    
    const submitSlottrans = (e) => {
        e.preventDefault();

        const data = {
            type_id: slottransInput.type_id,
            slot_id: slottransInput.slot_id,
            vehicle_id: slottransInput.vehicle_id,
            lc_number: slottransInput.lc_number,
            start_date_time: slottransInput.start_date_time,
            end_date_time: slottransInput.end_date_time,
            slug: slottransInput.slug,
            status: slottransInput.status,
        }

        axios.post(`api/store-slottrans`, data).then(res => {
            if(res.data.status === 200)
            {
                swal("Success!", res.data.message, "success");
                document.getElementById('SLOTTRANS_FORM').reset();
            }
            else if(res.data.status === 400)
            {
                setSlottrans({...slottransInput, error_list: res.data.errors});
            }
            
        })

    }



    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Add Slot Transaction</h1>

            

            <form onSubmit={submitSlottrans} id = "SLOTTRANS-FORM" >
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
                    

                    <div className="form-group mb-3">
                        <label>Type ID</label>
                        <input type="text" name="typee_id" className="form-control" value={slottransInput.typee_id} onChange={handleInput} />
                        <span>{slottransInput.error_list.typee_id}</span>
                    </div>

                    <div className="form-group mb-3">
                        <label>Slot ID</label>
                        <input type="number" name="slot_id" onChange={handleInput} value={slottransInput.slot_id} className="form-control" ></input>
                        <span>{slottransInput.error_list.slot_id}</span>
                    </div>

                    <div className="form-group mb-3">
                        <label>Vehicle ID</label>
                        <input type="number" name="vehicle_id" onChange={handleInput} value={slottransInput.vehicle_id} className="form-control" ></input>
                        <span>{slottransInput.error_list.vehicle_id}</span>
                    </div>

                    <div className="form-group mb-3">
                        <label>License No</label>
                        <input type="number" name="lc_number" onChange={handleInput} value={slottransInput.lc_number} className="form-control" ></input>
                        <span>{slottransInput.error_list.lc_number}</span>
                    </div>


                    <div className="form-group mb-3">
                        <label>Start Date and Time </label>
                        <input type="datetime-local" name="start_date_time" onChange={handleInput} value={slottransInput.start_date_time} className="form-control" ></input>
                    </div>

                    <div className="form-group mb-3">
                        <label>End Date and Time </label>
                        <input type="datetime-local" name="end_date_time" onChange={handleInput} value={slottransInput.end_date_time} className="form-control" ></input>
                        <span>{slottransInput.error_list.end_date_time}</span>
                    </div>

                    <div className="form-group mb-3">
                        <label> Slug </label>
                        <input type="text" name="slug" onChange={handleInput} value={slottransInput.slug} className="form-control" ></input>
                        <span>{slottransInput.error_list.slug}</span>
                    </div>

                    <div className="form-group mb-3">
                        <label> Status </label>
                        <select name="status" onChange={handleInput} value={slottransInput.status} className="form-control" >
                            <option value="">Select Status</option>
                            <option value="0">Active</option>
                            <option value="1">Inactive</option>
                        </select>
                        <span>{slottransInput.error_list.status}</span>
                    </div>
                    
                    
                </div>

                <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
            </form>
        </div>
    )
}

export default Slottrans;