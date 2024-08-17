import { create } from 'zustand';
import { TSection } from '../types/base';

interface State {
  themeSections: Array<TSection>;
  setThemeSections: (themeSection: Array<TSection>) => void;
}

const useStore = create<State>()((set) => ({
  themeSections: [],
  setThemeSections: (themeSections) => set({ themeSections }),
}));

export default useStore;
