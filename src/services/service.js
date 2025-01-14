import axios from "axios";

const API_URl="https://emojihub.yurace.pro/api/all";

export const getEmoji= async()=>{
    try{
        const response = await axios.get(API_URl);
        return response.data;
    }catch(e){
        console.error("Error in fetching data from API");
    }
}