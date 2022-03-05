import { Form, Button } from "react-bootstrap"
import {useContext, useState} from 'react';
import {OwnerContext} from '../contexts/OwnerContext';


const EditForm = ({theOwner}) =>{

    const id = theOwner.id;

    const [firstname, setFirstName] = useState(theOwner.firstname);
    const [lastname, setLastName] = useState(theOwner.lastname);
    const [contactno, setContactNo] = useState(theOwner.contactno);
    const [email, setEmail] = useState(theOwner.email);
    const [vehicleno, setVehicleNo] = useState(theOwner.vehicleno);
    const [slotno, setSlotNo] = useState(theOwner.slotno);


    const {updateOwner} = useContext(OwnerContext);

    const updatedOwner = {id, firstname, lastname, contactno, email, vehicleno, slotno};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateOwner(id, updatedOwner)
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
            <Button variant="success" type="submit" block>
                Edit Owner
            </Button>
        </Form>

     )
}

export default EditForm;