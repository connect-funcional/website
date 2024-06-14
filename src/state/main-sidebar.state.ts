import { atom } from 'nanostores';

export interface MainSidebarState {
  isSidebarOpen: boolean;
  isModalSidebarOpen: boolean;
}

export const mainSidebarState = atom<MainSidebarState>({
  isSidebarOpen: true,
  isModalSidebarOpen: false,
});

export const setMainSidebarState = (targetState: Partial<MainSidebarState>) => {
  mainSidebarState.set({
    ...mainSidebarState.get(),
    ...targetState,
  });
};

export const closeMainSidebar = () => {
  setMainSidebarState({ isSidebarOpen: false });
};

export const closeMainModalSidebar = () => {
  setMainSidebarState({ isModalSidebarOpen: false });
};

export const openMainSidebar = () => {
  setMainSidebarState({ isSidebarOpen: true });
};

export const openMainModalSidebar = () => {
  setMainSidebarState({ isModalSidebarOpen: true });
};

export const toggleMainSidebar = () => {
  const currentSidebarState = mainSidebarState.get();
  mainSidebarState.set({
    ...currentSidebarState,
    isSidebarOpen: !currentSidebarState.isSidebarOpen,
  });
};

export const toggleMainModalSidebar = () => {
  const currentSidebarState = mainSidebarState.get();
  mainSidebarState.set({
    ...currentSidebarState,
    isModalSidebarOpen: !currentSidebarState.isModalSidebarOpen,
  });
};
