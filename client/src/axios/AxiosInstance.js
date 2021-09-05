import axios from 'axios';

// TLD Address
const BASE_URL = "http://localhost:3001"

export const axiosInstance = axios.create({
    // one minute timeout
    timeout: 60000
});

export const BACKEND_API = {
    SIGN_IN: BASE_URL + "/auth/login"
}


