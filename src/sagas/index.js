import { all } from 'redux-saga/effects';
import imageSaga from './imageSaga';

function* rootSaga() {
    yield all([
        imageSaga(),
    ])
}

export default rootSaga;