import { IMAGES } from './../constants/index';

export const loadImage = () => ({
    type: IMAGES.LOAD,
});

export const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images
});

export const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error
})
