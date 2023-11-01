import axios from 'axios';

const URL = "https://pixabay.com/api/";
const KEY = "40371427-1d17a44230f9abb6916bf8c13";

export async function fetchPhoto(q, page, perPage) {
    const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await axios.get(url);
    return response.data;          
};