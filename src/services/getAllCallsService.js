import axios from "axios";

export const getAllCallsService=async()=>{
    try {
        const response= await axios.get("https://aircall-backend.onrender.com/activities");
        return response.data;
    } catch (error) {
        console.log(error)
    }
};