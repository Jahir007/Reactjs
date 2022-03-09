import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GuestContext = createContext()

const GuestContextProvider  = (props) => {

    const [guests, setGuests] = useState([
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', vehicleno: 'GJ15-AL6222', slotno: 'A10' },

    ]);

    useEffect(()=> {
        setGuests(JSON.parse(localStorage.getItem('guests')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('guests', JSON.stringify(guests));
    })
    
    
    
    const sortedGuests = guests.sort((a,b)=>(a.firstname < b.firstname ? -1 : 1));
    
    
    
    const addGuest = (firstname, lastname, contactno, vehicleno, slotno) => {
        setGuests([...guests , {id:uuidv4(), firstname, lastname, contactno,vehicleno, slotno}])
    }
    
    const deleteGuest = (id) => {
        setGuests(guests.filter(guest => guest.id !== id))
    }
    
    const updateGuest = (id, updatedGuest) => {
        setGuests(guests.map((guest) => guest.id === id ? updatedGuest : guest))
    }
    
        return (
            <GuestContext.Provider value={{sortedGuests, addGuest, deleteGuest, updateGuest}}>
                {props.children}
            </GuestContext.Provider>
        )
    }
    
export default GuestContextProvider;