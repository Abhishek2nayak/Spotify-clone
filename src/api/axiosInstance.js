import axios from "axios";

//creating axios instance for reuse 

const axiosInstance = axios.create({
    baseURL : 'https://api.spotify.com/v1/',
    headers: {
        'Content-Type': 'application/json', // Set default headers
      },
});


export default axiosInstance;