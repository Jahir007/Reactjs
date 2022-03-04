import React from 'react';


const Owner = ({owner}) => {

    return (
        <>

        <td>{owner.FirstName}</td>
        <td>{owner.LastName}</td>
        <td>{owner.ContactNo}</td>
		<td>{owner.email}</td>
		<td>{owner.VehicleNo}</td>
		<td>{owner.SlotNo}</td>
		<td>
			<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
			<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
		</td>

        </>
    );
}

export default Owner;