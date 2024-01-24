import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { readEmployees } from '../../redux/actions/employeeActions';

const EmployeeTable = () => {
    const dispatch = useDispatch()
    const employees = useSelector((state)=> state.employees.employeesData) ;
    console.log("employees", employees)

    useEffect(() => {
        dispatch(readEmployees());
    }, []);    // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
        <h6>EmployeeTable</h6>    
    </div>
  )
}

export default EmployeeTable
