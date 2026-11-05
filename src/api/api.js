import axios from "axios"

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
    withCredentials: true,  // frontend to send cookies with requests

});


export default api ;
