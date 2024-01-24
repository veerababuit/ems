import {
    READ_EMPLOYEES
} from "../actions/employeeActions";

const initialState = {
    employeesData: [],
}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case READ_EMPLOYEES:
            return {
                ...state, employeesData: action.payload
            }

            default:
                return state;
    }
}

export default employeeReducer;