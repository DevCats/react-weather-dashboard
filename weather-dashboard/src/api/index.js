import axios from 'axios'

// Function that creates an axios instance 
export const fetchData = (_endpoint, _queryParams) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    
    const client = axios.create({
        method: 'get',
        baseURL: `${apiUrl}/${_endpoint}?key=${apiKey}&q=${_queryParams}`,
        responseType: 'json',
        responseEncoding: 'utf8',
    });

    return client;
}