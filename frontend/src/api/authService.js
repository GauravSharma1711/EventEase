import axiosInstance from "./axios.js";

const authService = {

 register : async(userData) =>{
        const res = await axiosInstance.post('/auth/register',userData);
        return res.data;
    },
    
    login : async(userData)=>{
        const res = await axiosInstance.post('/auth/login',userData);
        return res.data;
    },

    logout: async ()=>{
        const res = await axiosInstance.delete('/auth/logout');
        return res.data;
    },

       getCurrentUser : async ()=>{
        const res = await axiosInstance.get('/auth/currentUser');
        return res.data;
    },


}


export default authService