import { IMAGES } from './../constants';

const InitialState = 1;
const loadingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case IMAGES.LOAD_SUCCESS:
            return state + 1;
        default:
            return state
    }
};

export default loadingReducer;