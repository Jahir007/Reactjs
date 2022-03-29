import { Form, Button } from "react-bootstrap"
import {VehicleContext} from '../contexts/VehicleContext';
import {useContext, useState} from 'react';
import axios from "axios";

const EditVehicle = ({theVehicle}) =>{


    const url = "http://localhost/Reactjs/parkportal/src/Api/vehupdate.php";


    const id = theVehicle.id;
    const [categoryid, setCategoryid] = useState(theVehicle.categoryid);
    const [lcnumber, setLcnumber] = useState(theVehicle.lcnumber);
    const [description, setDescription] = useState(theVehicle.description);
    const [photo, setPhoto] = useState(theVehicle.photo);
    const [ownerid, setOwnerid] = useState(theVehicle.ownerid);
    const [createdt, setCreatedt] = useState(theVehicle.createdt);

    const {updateVehicle} = useContext(VehicleContext);

    const updatedVehicle = {categoryid, lcnumber, description, photo, ownerid, createdt};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateVehicle(id, updatedVehicle)
        console.log(updatedVehicle);
        axios.post(url,  {
            categoryid: updatedVehicle.categoryid,
            lcnumber: updatedVehicle.lcnumber,
            description: updatedVehicle.description,
            photo: updatedVehicle.photo,
            ownerid: updatedVehicle.ownerid,
            createdt: updatedVehicle.createdt,
        })
        .then(res => console.log(res.data))
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                     type="int"
                     placeholder="category Id"
                     name="categoryid"
                     value={categoryid}
                    onChange={(e)=> setCategoryid(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                        type="varchar"
                        placeholder="Licence number"
                        name="lcnumber"
                        value={lcnumber}
                    onChange={(e)=> setLcnumber(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                     type="textarea"
                     placeholder="Description"
                     name="description"
                     value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                 type="varchar"
                 placeholder="photo"
                 name="file"
                 accept="image/*" 
                 multiple={false}
                 value={photo}
                    onChange={(e)=> setPhoto(e.target.value)}
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                     type="int"
                     placeholder="ownerid"
                     name="ownerid"
                     value={ownerid}
                    onChange={(e)=> setOwnerid(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                      type="date"
                      placeholder="createdt"
                      name="createdt"
                      value={createdt}
                    onChange={(e)=> setCreatedt(e.target.value)}
                    required
                />
            </Form.Group>
            <Button className="d-grid mx-auto" variant="success" type="submit" block>
                Edit Vehicle
            </Button>
        </Form>

     )
}

export default EditVehicle;