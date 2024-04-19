import axios from "axios";


const HOST = 'http://localhost:3001';
const protocol = 'http';

// type Method = 'GET' | 'PUT' | 'POST' | 'DELETE';

const fetch = axios.create({
    baseURL: `${protocol}://${HOST}/`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});


export default fetch;