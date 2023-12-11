import React from "react";
import axios from "axios";

async function handleNewToken() {
    const client_id = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;
    const client_secret = process.env.REACT_APP_SPOTIFY_API_CLIENT_SECRET;
    const text = `${client_id}:${client_secret}`;
    const encodedCredentials = btoa(text);
    try {
        const response = await axios.post(`https://accounts.spotify.com/api/token`,
            'grant_type=client_credentials', // sent as data in the POST request
            {
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }

            });

        if (response.status === 200) {
            const token = response.data.access_token;
            console.log(token);
            return token; // Optionally return the token
        } else {
            console.error('Failed to retrieve access token');
            return null; // Return null or handle the error accordingly
        }
    } catch (err) {
        throw new Error(err)
    }

}
const refreshToken = async () => {
    try {
        const token = await handleNewToken();
        localStorage.setItem('token', token);
        localStorage.setItem('tokenExpiration', new Date().getTime() + 3600000); // New token expiration time (1 hour)
    } catch (error) {
        // Handle error while refreshing token
        console.error('Error refreshing token:', error);
    }
};
// Function to check token expiry
const checkTokenExpiry = () => {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    const currentTime = new Date().getTime();

    if (currentTime > tokenExpiration) {
        // Token expired, refresh token
        refreshToken();
    }

    // Check again after some time interval
    setTimeout(checkTokenExpiry, 60000); // Check every minute
};

export default checkTokenExpiry;





