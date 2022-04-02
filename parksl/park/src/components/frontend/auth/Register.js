import React from "react";
import Navbar from "../../../layouts/frontend/Navbar";
import { useState } from "react";
import axios from "axios";


const Register = () => {

    const [registerInput, setRegister] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        e.presist();
        setRegister({
            ...registerInput,
            [e.target.name]: e.target.value
        })
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        console.log(registerInput);

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password
        }


        axios.post("/api/register", data).then(res => {
            console.log(res);
        }
        )
    }

    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={registerSubmit}>
                                    <div className="form-group mb-3">
                                        <label> Full name</label>
                                        <input type="text" name='name' onChange={handleInput} className="form-control" value={registerInput.name} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label> Email ID</label>
                                        <input type="email" name='email' onChange={handleInput} className="form-control" value={registerInput.email} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label> Password</label>
                                        <input type="password" name='password' onChange={handleInput}className="form-control" value={registerInput.password} />
                                    </div>
                                    {/* <div className="form-group mb-3">
                                        <label>Confirm Password</label>
                                        <input type="password" name='confirm_password' onChange={handleInput} className="form-control" value={registerInput.confirm_password} />
                                    </div> */}
                                    <div className="form-group mb-3">
                                        <button type="" className="btn btn-primary"> Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;