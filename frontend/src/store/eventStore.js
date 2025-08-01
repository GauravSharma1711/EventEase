import { create } from 'zustand';
import toast from 'react-hot-toast';
import eventService from '../api/eventService';

const useEventStore = create((set, get) => ({
  events: [],

  fetchAllEvents: async () => {
    try {
      const res = await eventService.getAllEvent();
      set({ events: res.events });
    } catch (err) {
      toast.error('Failed to fetch events');
      console.log(err);
      
    }
  },

  createEvent: async (eventData) => {
    try {
      const res = await eventService.createEvent(eventData);
      toast.success('Event created');
      get().fetchAllEvents();
      return res;
    } catch (err) {
      toast.error('Failed to create event');
      console.log(err);
    }
  },

  updateEvent: async (eventId, eventData) => {
    try {
      const res = await eventService.updateEvent(eventId, eventData);
      toast.success('Event updated');
      get().fetchAllEvents();
      return res;
    } catch (err) {
      toast.error('Failed to update event');
      console.log(err);
    }
  },

  deleteEvent: async (eventId) => {
    try {
      await eventService.deleteEvent(eventId);
      toast.success('Event deleted');
      get().fetchAllEvents();
    } catch (err) {
      toast.error('Failed to delete event');
      console.log(err);
    }
  },

  updateEventStatus: async (eventId) => {
    try {
      await eventService.updateEventStatus(eventId);
      toast.success('Event status updated');
      get().fetchAllEvents();
    } catch (err) {
      toast.error('Failed to update status');
      console.log(err);
    }
  }
}));

export default useEventStore;
