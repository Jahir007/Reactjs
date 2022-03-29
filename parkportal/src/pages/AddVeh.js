import { Form, Button } from "react-bootstrap"
import {VehicleContext} from '../contexts/VehicleContext';
import {useContext, useState} from 'react';
import Axios from 'axios' ;



const AddVehicle = () =>{
        
    const url = "http://localhost/Reactjs/parkportal/src/Api/vehcreate.php";

    const {addVehicle} = useContext(VehicleContext);

    const [newVehicle, setNewVehicle] = useState({
        categoryid:"", lcnumber:"", description:"", photo:"", ownerid:"", createdt:""
    });

    const onInputChange = (e) => {
        setNewVehicle({...newVehicle,[e.target.name]: e.target.value})
        // setNewOwner(newOwner);
        //  console.log(newOwner);
    }

    const {categoryid, lcnumber, description, photo, ownerid, createdt} = newVehicle;

    const handleSubmit = (e) => {
        e.preventDefault();
        addVehicle(categoryid, lcnumber, description, photo, ownerid, createdt);
        console.log(newVehicle);
        Axios.post(url,  {
            // id: e.target.id,
            categoryid: newVehicle.categoryid,
            lcnumber: newVehicle.lcnumber,
            description: newVehicle.description,
            photo: newVehicle.photo,
            ownerid: newVehicle.ownerid,
            createdt: newVehicle.createdt    
        })
        .then(res => console.log(res.addVehicle))
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="int"
                    placeholder="category Id"
                    name="categoryid"
                    value={categoryid}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="varchar"
                    placeholder="Licence number"
                    name="lcnumber"
                    value={lcnumber}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="textarea"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="file"
                    placeholder="photo*"
                    name="photo"
                    accept="image/*" 
                    multiple={false}
                    value={photo}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="int"
                    placeholder="ownerid"
                    name="ownerid"
                    value={ownerid}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="date"
                    placeholder="createdt"
                    name="createdt"
                    value={createdt}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <br></br>
            <Button className="d-grid mx-auto" variant="success" type="submit" block>
                Add New Vehicle
            </Button>
        </Form>

     )
}

export default AddVehicle;