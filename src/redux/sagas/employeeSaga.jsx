// import axios from 'axios';
import {
    // call,
    put,
    takeLatest,
    // takeEvery
} from 'redux-saga/effects'

import { READ_EMPLOYEES, readEmployees} from '../actions/employeeActions';
import employeesData from '../../services/employeesData';

function* handleReadEmployee() {
    // const API_URL = 'https://jsonplaceholder.typicode.com/users';
    try {
        // const response = yield call(axios.get, API_URL);
        yield put(readEmployees(employeesData));
    } catch (error) {
        console.log(error)
    }
}

function* employeeSaga() {
    yield takeLatest(READ_EMPLOYEES, handleReadEmployee)
}
export default employeeSaga;