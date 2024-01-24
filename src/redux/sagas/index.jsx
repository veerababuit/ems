import { all } from 'redux-saga/effects'
import employeeSaga from "./employeeSaga";

function* rootSaga() {
    yield all([
        employeeSaga(),
    ])
}

export default rootSaga;