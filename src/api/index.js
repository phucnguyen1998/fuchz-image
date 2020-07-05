import axiosServices from './../axiosServices/axiosServices';

const key = '?client_id=rvyDRiPI-HdwVdHIKb8u0AKxfSZYqz1lQnvv05ZzUo8';
const URL = 'https://api.unsplash.com/photos/'

// export const fetchImages = async (page) => {
//     const response = await fetch(`${URL}${key}&per_page=10&page=${page}`)
//     const data = await response.json();
//     if (response.status >= 400) {
//         throw new Error(data.errors)
//     }
//     return data;
// }

export const fetchImages = (page) => {
    const data = axiosServices.get(`${URL}${key}&per_page=10&page=${page}`).then((data) => {
        if (data.status >= 400) {
            throw new Error(data.errors)
        }
        return data.data;
    })
    return data
}