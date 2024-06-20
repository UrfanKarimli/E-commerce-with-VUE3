import { createStore } from "zustand";

const useCountStore = createStore((set) => ({
    count: 0,
  }))

export const { getState, setState, subscribe } = useCountStore;

export default useCountStore
