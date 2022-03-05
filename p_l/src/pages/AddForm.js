import { Form, Button } from "react-bootstrap"
import {OwnerContext} from '../contexts/OwnerContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addOwner} = useContext(OwnerContext);

    const [newOwner, setNewOwner] = useState({
        firstname:"", lastname:"", contactno:"", email:"", vehicleno:"", SlotNo:""
    });

    const onInputChange = (e) => {
        setNewOwner({...newOwner,[e.target.name]: e.target.value})
    }

    const {firstname, lastname, contactno, email, vehicleno, SlotNo} = newOwner;

    const handleSubmit = (e) => {
        e.preventDefault();
        addOwner(firstname, lastname, contactno, email, vehicleno, SlotNo);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Contact No"
                    name="contactno"
                    value={contactno}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Vehicle No"
                    name="vehicleno"
                    value={vehicleno}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Slot No"
                    name="SlotNo"
                    value={SlotNo}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" >
                Add New Owner
            </Button>
        </Form>

     )
}

export default AddForm;