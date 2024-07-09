import axios from "axios";

export const unarchiveSingleCallService=async(callId)=>{
    try {
        const response= await axios.patch(`https://aircall-backend.onrender.com/activities/${callId}`,{
            is_archived:false
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};