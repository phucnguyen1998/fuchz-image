import { IMAGES } from './../constants/index';

const InitialState = []
const imagesReducer = (state = InitialState, action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images]
    }
    return state;
}

export default imagesReducer;