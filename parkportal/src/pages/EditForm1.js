import { Form, Button } from "react-bootstrap"

import {GuestContext} from '../contexts/GuestContext';
import {useContext, useState} from 'react';

const EditForm1 = ({theGuest}) =>{

    const id = theGuest.id;

    const [firstname, setFirstName] = useState(theGuest.firstname);
    const [lastname, setLastName] = useState(theGuest.lastname);
    const [contactno, setContactNo] = useState(theGuest.contactno);
    const [email, setEmail] = useState(theGuest.email);
    const [vehicleno, setVehicleNo] = useState(theGuest.vehicleno);
    const [slotno, setSlotNo] = useState(theGuest.slotno);


    const {updateGuest} = useContext(GuestContext);

    const updatedGuest = {id, firstname, lastname, contactno, email, vehicleno, slotno};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGuest(id, updatedGuest)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e)=> setFirstName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={(e)=> setLastName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Contact No"
                    name="contactno"
                    value={contactno}
                    onChange={(e)=> setContactNo(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Vehicle No"
                    name="vehicleno"
                    value={vehicleno}
                    onChange={(e)=> setVehicleNo(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Slot No"
                    name="slotno"
                    value={slotno}
                    onChange={(e)=> setSlotNo(e.target.value)}
                />
            </Form.Group>
            <Button className="d-grid mx-auto" variant="success" type="submit" block>
                Edit Guest
            </Button>
        </Form>

     )
}

export default EditForm1;