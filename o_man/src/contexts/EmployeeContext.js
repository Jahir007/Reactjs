import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider  = (props) => {

    const [employees, setEmployees] = useState([
        {id:uuidv4(), name: 'Thomas', lname: "Hardly10", phone: '(171) 555-2222', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA'},
        {id:uuidv4(), name: 'Dominique Perrier', lname:"Perrier" , phone: '(313) 555-5735' , email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany'},
        {id:uuidv4(), name: 'Thomas', lname: "Hardly10", phone: '(171) 555-2222', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA'},
        {id:uuidv4(), name: 'Thomas', lname: "Hardly10", phone: '(171) 555-2222', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA'},
])

useEffect(()=> {
    setEmployees(JSON.parse(localStorage.getItem('employees')))
},[])

useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
})



const sortedEmployees = employees.sort((a,b)=>(a.name < b.name ? -1 : 1));



const addEmployee = (fname, lname, phone, email, address) => {
    setEmployees([...employees , {id:uuidv4(), fname, lname, phone, email, address}])
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