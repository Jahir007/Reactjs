import { v4 as uuidv4 } from 'uuid';

import { createContext, useState } from 'react';
import React from 'react'

export const OwnerContext = createContext();

const OwnerContextProvider = (props) => {

    const [owner] = useState([
        { id: uuidv4(), FirstName: 'Thomas', LastName: 'Hardy', ContactNo: '1087654321', email: 'thomashardy@maiortland', VehicleNo: 'GJ15-AL6222', SlotNo: 'A10' },
        { id: uuidv4(), FirstName: 'Thomas', LastName: 'Hardy', ContactNo: '1087654321', email: 'thomashardy@maiortland', VehicleNo: 'GJ15-AL6222', SlotNo: 'A10' },
        { id: uuidv4(), FirstName: 'Thomas', LastName: 'Hardy', ContactNo: '1087654321', email: 'thomashardy@maiortland', VehicleNo: 'GJ15-AL6222', SlotNo: 'A10' },
        { id: uuidv4(), FirstName: 'Thomas', LastName: 'Hardy', ContactNo: '1087654321', email: 'thomashardy@maiortland', VehicleNo: 'GJ15-AL6222', SlotNo: 'A10' },
        { id: uuidv4(), FirstName: 'Thomas', LastName: 'Hardy', ContactNo: '1087654321', email: 'thomashardy@maiortland', VehicleNo: 'GJ15-AL6222', SlotNo: 'A10' },

    ]);

    const addOwner = (FirstName, LastName, ContactNo, email, VehicleNo, SlotNo) => {
        setOwner(id: uuidv4(), FirstName, LastName, ContactNo, email, VehicleNo, SlotNo);
    }


    return (

        <OwnerContext.Provider value={{owner, addOwner}}>
            {props.children}
        </OwnerContext.Provider>
    );
};

export default OwnerContextProvider;