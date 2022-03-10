import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const OwnerContext = createContext()

const OwnerContextProvider  = (props) => {

    const [owners, setOwners] = useState([
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },

    ]);

    useEffect(()=> {
        setOwners(JSON.parse(localStorage.getItem('owners')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('owners', JSON.stringify(owners));
    })
    
    
    
    const sortedOwners = owners.sort((a,b)=>(a.firstname < b.firstname ? -1 : 1));
    
    
    
    const addOwner = (firstname, lastname, contactno, email, vehicleno, slotno) => {
        setOwners([...owners , {id:uuidv4(), firstname, lastname, contactno, email, vehicleno, slotno}])
    }
    
    const deleteOwner = (id) => {
        setOwners(owners.filter(owner => owner.id !== id))
    }
    
    const updateOwner = (id, updatedOwner) => {
        setOwners(owners.map((owner) => owner.id === id ? updatedOwner : owner))
    }
    
        return (
            <OwnerContext.Provider value={{sortedOwners, addOwner, deleteOwner, updateOwner}}>
                {props.children}
            </OwnerContext.Provider>
        )
    }
    
    export default OwnerContextProvider;