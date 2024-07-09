import axios from "axios";

export const unarchiveAllCallService=async(callId)=>{
    try {
        const response= await axios.patch(`https://aircall-backend.onrender.com/reset`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};