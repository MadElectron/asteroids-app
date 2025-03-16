import { create } from "zustand";
import users from "@/app/mock/users";

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  editUser: (user: User) => void;
  removeUser: (id: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  /**
   * Emulates fetching from API
   */
  setUsers: () => {
    set({ users });
  },
  addUser: (user: User) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
  editUser: (user: User) => {
    set((state) => ({
      users: state.users.map((u) => (u.id === user.id ? user : u)),
    }));
  },
  removeUser: (id: number) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    }));
  },
}));

export default useUserStore;
