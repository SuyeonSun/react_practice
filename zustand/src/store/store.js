import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  selectedButton: null,

  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  removeCount: () => set({ count: 0 }),
  setSelectedButton: (button) => set({ selectedButton: button }),
}));

export default useStore;
