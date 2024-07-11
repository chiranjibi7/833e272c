import axios from "axios";

export const archiveAllCallService=async()=>{
    try {
        const response= await axios.patch(`https://aircall-backend.onrender.com/set`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};