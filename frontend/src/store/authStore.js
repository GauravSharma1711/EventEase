import { create } from 'zustand';
import toast from 'react-hot-toast';
import authService from '../api/authService.js';


const useAuthStore = create((set)=>({


     authUser: null,
    allUsers:[],


     signUp: async (data) => {
      try {
        const res = await authService.register(data);
        toast.success('Signed up successfully!');
        return res;
      } catch (error) {
        console.error("Error while signing up:", error);
        toast.error('Signup failed');
        throw error
      }
    },

    login: async (data) => {
      try {
        const res = await authService.login(data);
        set({ authUser: res.user });
        toast.success(res.message || 'Logged in successfully!');
        return res;
      } catch (error) {
        console.error("Error while logging in:", error);
        toast.error('Login failed');
        throw error
      } 
    },

    logout: async () => {
      try {
         await authService.logout();
        set({ authUser: null });
        toast.success('Logged out successfully!');
      } catch (error) {
        console.error("Error while logging out:", error);
        toast.error('Logout failed');
      }
    },

    getCurrentUser: async () => {
      try {
        const res = await authService.getCurrentUser();
        set({ authUser: res.currentUser });
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    },


}))

export default useAuthStore;