import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID uZVYue3YrL-d5XKkVdIH9eb30muOQAWnuP6by0etoQU'
    }
});
