import axios from "axios";

export const getSingleCallService=async(callId)=>{
    try {
        const response= await axios.get(`https://aircall-backend.onrender.com/activities/${callId}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};