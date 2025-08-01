import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import toast from 'react-hot-toast';
import authService from '../api/authService.js';

const useAuthStore = create(
  persist(
    (set) => ({
      authUser: null,

      signUp: async (data) => {
        try {
          const res = await authService.register(data);
          toast.success('Signed up successfully!');
          return res;
        } catch (error) {
          console.error("Error while signing up:", error);
          toast.error('Signup failed');
          throw error;
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
          throw error;
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
    }),
    {
      name: 'auth-storage', 
      getStorage: () => localStorage, 
    }
  )
);

export default useAuthStore;
