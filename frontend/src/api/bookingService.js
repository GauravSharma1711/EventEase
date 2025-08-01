import axiosInstance from "./axios.js";

const bookingService = {
  
  bookSeats: async (eventId, data) => {
    const res = await axiosInstance.post(`/booking/bookEvent/${eventId}`, data);
    console.log(res);
    
    return res.data;
  },


  myBookings: async () => {
    const res = await axiosInstance.get('/booking/myBookings');
   
    
    return res.data;
  },

  
  cancelBooking: async (bookingId) => {
    const res = await axiosInstance.delete(`/booking/${bookingId}`);
    return res.data;
  },

  
  allBooking: async (eventId) => {
    const res = await axiosInstance.get(`/booking/allBookings/${eventId}`);
    return res.data;
  }
};

export default bookingService;
