import { Form, Button } from "react-bootstrap"
import {OwnerContext} from '../contexts/OwnerContext'
import {useContext, useState} from 'react';
import React from 'react';




const AddForm = () =>{

    const {addOwner} = useContext(OwnerContext);

    const [newOwner, setNewOwner] = useState({
        FirstName:"", LastName:"", ContactNo:"", email:"", VehicleNo:"", SlotNo:""
    });

    const onInputChange = (e) => {
        setNewOwner({...newOwner,[e.target.FirstName]: e.target.value})
    }

    const {FirstName, LastName, ContactNo, email, VehicleNo, SlotNo} = newOwner;

    const handleSubmit = (e) => {
        e.preventDefault();
        addOwner(FirstName, LastName, ContactNo, email, VehicleNo, SlotNo);
    }

     return (

        <React.Fragment>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="First Name *"
                    name="FirstName"
                    value={FirstName}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Last Name *"
                    name="LastName"
                    value={LastName}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Contact No"
                    name="contact"
                    value={ContactNo}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Vehicle Number *"
                    name="VehicleNo"
                    value={VehicleNo}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Slot Number "
                    name="SlotNo"
                    value={SlotNo}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Add New Owner   
            </Button>
        </Form>
        </React.Fragment>
     )
}

export default AddForm;