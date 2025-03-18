import { create } from "zustand";

interface AppState {
  loading: boolean;
  notifications: Snack[];
  notify: (payload: Snack) => void;
  setAppLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  loading: false,
  notifications: [],
  notify(payload) {
    set((state) => ({
      notifications: [...state.notifications, payload],
    }));
  },
  setAppLoading(loading) {
    set({ loading });
  },
}));
