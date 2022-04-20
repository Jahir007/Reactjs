// import React from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import swal from "sweetalert";


// const EditGuest = (props) => {


//     const history = useHistory();
//     const [guestInput, setGuestInput] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState([]);


//     useEffect(() => {

//         const guest_id = props.match.params.id;
//         axios.get(`/api/edit-guest/${guest_id}`).then(res => {
//             if (res.data.status === 200) {
//                 setGuestInput(res.data.guest);
//             }
//             else if (res.data.status === 404) {
//                 swal("Error!", res.data.message, "error");
//                 history.push("/admin/view-guest");
//             }
//             setLoading(false);
//         });
//     }, [props.match.params.id, history]);

//     const handleInput = (e) => {
//         e.persist();
//         setGuestInput({ ...guestInput, [e.target.name]: e.target.value });
//     }


//     const updateGuest = (e) => {
//         e.preventDefault();

//         const guest_id = props.match.params.id;
//         const data = guestInput;
//         axios.put(`/api/update-guest/${guest_id}`, data).then(res => {
//             if(res.data.status === 200) 
//             {
//                 swal("Success!", res.data.message, "success");
//                 setError([]);
//             }
//             else if(res.data.status === 422)
//             {
//                 swal("Fields Are Madaetory!","", "error");
//                 setError(res.data.errors);
//             }
//             else if (res.data.status === 404) 
//             {
//                 swal("Error!", res.data.message, "error");
//                 history.push("/admin/view-guest");
//             }

//         });
//     }


//     if(loading)
//     {
//         return <h4>Loading...</h4>
//     }



//     return (
//         <div className="container px-4">
//             <div className="card mt-4">
//                 <div className="card-header">
//                     <h4>Edit Guest
//                         <Link to="/admin/view-guest" className="btn btn-primary btn-sm float-end">Back</Link>
//                     </h4>
//                 </div>
//                 <div className="card-body">

//                     <form onSubmit={updateGuest}>
//                         <div className="tab-content" id="myTabContent">
//                             <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>


//                             <div className="form-group">
//                                 <label htmlFor="guest_id">Guest ID</label>
//                                 <input type="text" className="form-control" id="guest_id" name="guest_id" value={guestInput.guest_id} onChange={handleInput} />
//                                 <small className="text-danger">{error.guest_id}</small>
//                             </div>


//                             <div className="form-group mb-3">
//                                 <label>Guest Name</label>
//                                 <input type="text" name="guest_name" className="form-control" value={guestInput.guest_name} onChange={handleInput} />
//                                 <small className="text-danger">{error.guest_name}</small>

//                             </div>
//                             <div className="form-group mb-3">
//                                 <label>License No</label>
//                                 <input type="text" name="license_no" className="form-control" value={guestInput.license_no} onChange={handleInput} />
//                                 <small className="text-danger">{error.license_no}</small>

//                             </div>
//                             <div className="form-group mb-3">
//                                 <label>Duration</label>
//                                 <input type="number" name="duration" className="form-control" value={guestInput.duration} onChange={handleInput} />
//                                 <small className="text-danger">{error.duration}</small>

//                             </div>
//                             <div className="form-group mb-3">
//                                 <label>Slot ID</label>
//                                 <input type="number" name="slot_id" className="form-control" value={guestInput.slot_id} onChange={handleInput} />
//                                 <small className="text-danger">{error.slot_id}</small>

//                             </div>
//                             <div className="form-group mb-3">
//                                 <label>Start Date</label>
//                                 <input type="date" name="start_date" className="form-control" value={guestInput.start_date} onChange={handleInput} />
//                                 <small className="text-danger">{error.start_date}</small>
//                             </div>

//                             <div className="form-group mb-3">
//                                 <label>Remarks</label>
//                                 <input type="text" name="remarks" className="form-control" value={guestInput.remarks} onChange={handleInput} />
//                                 <small className="text-danger">{error.remarks}</small>
//                             </div>    

//                         </div>

//                         <button type="submit" className="btn btn-primary px-4 float-end">Update</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EditGuest;