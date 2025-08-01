import { create } from 'zustand';
import toast from 'react-hot-toast';
import bookingService from '../api/bookingService.js';

const useBookingStore = create((set, get) => ({
  myBookings: [],
  allBookings: [],
  

  bookSeats: async (eventId, data) => {
    try {
      const res = await bookingService.bookSeats(eventId, data);
      toast.success('Booking successful!');
      return res;
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Booking failed');
    }
  },

 
  fetchMyBookings: async () => {
    try {
      const bookings = await bookingService.myBookings();
      set({ myBookings: bookings });
    } catch (err) {
      toast.error('Failed to fetch your bookings',err);
    }
  },

  
  cancelBooking: async (bookingId) => {
    try {
      await bookingService.cancelBooking(bookingId);
      toast.success('Booking cancelled');
      get().fetchMyBookings();
    } catch (err) {
      toast.error('Failed to cancel booking',err);
    } 
  },

 
  fetchAllBookings: async (eventId) => {
    try {
      const bookings = await bookingService.allBooking(eventId);
      set({ allBookings: bookings });
    } catch (err) {
      toast.error('Failed to fetch all bookings',err);
    }
  }
}));

export default useBookingStore;
