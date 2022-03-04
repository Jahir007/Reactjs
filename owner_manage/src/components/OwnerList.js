import Owner from './Owner';
import React, { useContext, useState } from 'react'
import {OwnerContext} from '../contexts/OwnerContext';
import AddForm from './AddForm';
import {Modal, Button} from 'react-bootstrap';


const OwnerList = () => {

    const {owner} = useContext(OwnerContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Owners</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Owner</span></Button>
                    </div>
                </div>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact No.</th>
                        <th>Email</th>
                        <th>Vehicle</th>
                        <th>Slot No.</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        owner.map(owner => (
                            <tr key={owner.id}>
                                <Owner owner={owner}/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Owner
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddForm />

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default OwnerList;