import { Form, Button } from "react-bootstrap"

import {GuestContext} from '../contexts/GuestContext';
import {useContext, useState} from 'react';
import Select from 'react-select'

const EditForm1 = ({theGuest}) =>{


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]


    const id = theGuest.id;

    const [firstname] = useState(theGuest.firstname);
    const [lastname, setLastName] = useState(theGuest.lastname);
    const [contactno, setContactNo] = useState(theGuest.contactno);
    const [email, setEmail] = useState(theGuest.email);
    const [vehicleno, setVehicleNo] = useState(theGuest.vehicleno);
    const [slotno, setSlotNo] = useState(theGuest.slotno);
    // const [vehtype, setVehtype] = useState(theGuest.vehtype)
    // const [intime, setIntime] = useState(theGuest.intime)
    //  const [outtime,setOuttime] = useState(theGuest.outtime)


    const {updateGuest} = useContext(GuestContext);

    const updatedGuest = {id, firstname, lastname, contactno, email, vehicleno, slotno};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGuest(id, updatedGuest)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Select options={options} />
                {/* <Form.Control
                    type="text"
                    placeholder="Vechile Type"
                    name="vehtype"
                    value={vehtype}
                    onChange={(e)=> setVehtype(e.target.value)}
                    required
                /> */}
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
                Pay
            </Button>
        </Form>

     )
}

export default EditForm1;