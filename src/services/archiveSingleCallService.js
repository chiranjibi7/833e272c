import axios from "axios";

export const archiveSingleCallService=async(callId)=>{
    try {
        const response= await axios.patch(`https://aircall-backend.onrender.com/activities/${callId}`,{
            is_archived:true
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};