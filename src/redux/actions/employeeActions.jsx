export const READ_EMPLOYEES = 'READ_EMPLOYEES';

export const readEmployees = (employees) => ({
    type: READ_EMPLOYEES,
    payload: employees,

})