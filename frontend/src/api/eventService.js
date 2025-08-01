
import axiosInstance from "./axios.js";

const eventService  = {


    createEvent : async (data) => {
    const res = await axiosInstance.post('/event/create', data);
    return res.data;
  },

  updateEvent : async (eventId,data)=>{
     const res = await axiosInstance.put(`/event/update/${eventId}`, data);
       return res.data;
  },

  deleteEvent :  async (eventId)=>{
     const res = await axiosInstance.delete(`/event/delete/${eventId}`);
       return res.data;
  },

  getAllEvent :  async ()=>{
     const res = await axiosInstance.get('/event/all');

       return res.data;
  },

  updateEventStatus :  async (eventId)=>{
     const res = await axiosInstance.put(`/event/updateStatus/${eventId}`);
       return res.data;
  }





}

export default eventService