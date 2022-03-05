import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider  = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },
        { id: uuidv4(), firstname: 'Thomas', lastname: 'Hardy', contactno: '1087654321', email: 'thomashardy@maiortland', vehicleno: 'GJ15-AL6222', slotno: 'A10' },

    ]);

useEffect(()=> {
    setEmployees(JSON.parse(localStorage.getItem('employees')))
},[])

useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
})



const sortedEmployees = employees.sort((a,b)=>(a.firstname < b.firstname ? -1 : 1));



const addEmployee = (firstname, lastname, contactno, email, vehicleno, slotno) => {
    setEmployees([...employees , {id:uuidv4(), firstname, lastname, contactno, email, vehicleno, slotno}])
}

const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
}

const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
}

    return (
        <EmployeeContext.Provider value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;