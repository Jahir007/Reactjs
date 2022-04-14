import React from "react";
import axios from 'axios';
import { useState } from "react";
import swal from 'sweetalert';

const Guest = () => {


    const [guestInput, setGuest] = useState({
        guest_name: '',
        lc_number: '',
        duration: '',
        slot_id: '',
        start_date: '',
        remarks: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setGuest({...guestInput, [e.target.name]:e.target.value});
    }

    
    const submitGuest = (e) => {
        e.preventDefault();

        const data = {
            guest_name: guestInput.guest_name,
            lc_number: guestInput.lc_number,
            duration: guestInput.duration,
            slot_id: guestInput.slot_id,
            start_date: guestInput.start_date,
            remarks: guestInput.remarks,
        }

        axios.post(`api/store-guest`, data).then(res => {
            if(res.data.status === 200)
            {
                swal("Success!", res.data.message, "success");
                document.getElementById('GUEST_FORM').reset();
            }
            else if(res.data.status === 400)
            {
                setGuest({...guestInput, error_list: res.data.errors});
            }
            
        })

    }

    // var display_error = [];
    // if(ownerInput.error_list)
    // {
    //     display_error = [
    //         ownerInput.error_list.firstname,
    //         ownerInput.error_list.lastname,
    //         ownerInput.error_list.contactno,
    //         ownerInput.error_list.email,
    //         ]
    //     }


    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Add Guest</h1>

            

            <form onSubmit={submitGuest} id = "GUEST-FORM" >
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
                    

                    <div className="form-group mb-3">
                        <label>Guest Name</label>
                        <input type="text" name="guest_name" onChange={handleInput} value={guestInput.guest_name} className="form-control" ></input>
                        <span>{guestInput.error_list.guest_name}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label>License Number</label>
                        <input type="text" name="lc_number" onChange={handleInput} value={guestInput.lc_number}  className="form-control" ></input>
                        <span>{guestInput.error_list.lc_number}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Duration</label>
                        <input type="number" name="duration" onChange={handleInput} value={guestInput.duration}  className="form-control" placeholder="In Hour" ></input>
                        <span>{guestInput.error_list.duration}</span>
                    </div>


                    <div className="form-group mb-3">
                        <label>Slot ID</label>
                        <input type="number" name="slot_id" onChange={handleInput} value={guestInput.slot_id}  className="form-control" ></input>
                        <span>{guestInput.error_list.slot_id}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Start Date</label>
                        <input type="date" name="start_date" onChange={handleInput} value={guestInput.start_date}  className="form-control" ></input>
                        <span>{guestInput.error_list.start_date}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Remarks</label>
                        <input type="test" name="remarks" onChange={handleInput} value={guestInput.remarks}  className="form-control" ></input>
                        <span>{guestInput.error_list.remarks}</span>
                    </div>
                    
                </div>

                <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
            </form>
        </div>
    )
}

export default Guest;