import { create } from "zustand";
import users from "@/app/mock/users";
import { GridRowId } from "@mui/x-data-grid";

interface UserState {
  users: User[];
  setUsers: () => void;
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
    // Synthetic new ID
    const id = Math.max(...users.map((u) => u.id)) + 1;

    set((state) => ({
      users: [...state.users, { ...user, id: id }],
    }));
  },
  editUser: (user: User) => {
    set((state) => ({
      users: state.users.map((u) => (u.id === user.id ? user : u)),
    }));
  },

  removeUser: (id: GridRowId) => {
    console.log(id);
    set((state) => ({
      users: state.users.filter((user) => user.id !== (id as number)),
    }));
  },
}));

export default useUserStore;
