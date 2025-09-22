import { create } from 'zustand';

// Types
export type TabName = 'Home' | 'Search' | 'Explore' | 'Reels' | 'Messages' | 'Notifications' | 'Profile' | 'Create' | 'More' | '';

interface NavigationState {
  // State
  active: TabName;
  showNotifications: boolean;
  showSearch: boolean;
  showCreatePopup: boolean;
  showMorePopup: boolean;
  showMobileNotifications: boolean;
  showMobileSearch: boolean;
  lastActive: TabName;
}

interface NavigationActions {
  // Actions
  setActive: (tabName: TabName) => void;
  setLastActive: (tabName: TabName) => void;
  openNotifications: () => void;
  closeNotifications: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleCreatePopup: () => void;
  toggleMorePopup: () => void;
  closeAllPopups: () => void;
  resetOverlays: () => void;
}

export type NavigationStore = NavigationState & NavigationActions;

const useNavigationStore = create<NavigationStore>((set, get) => ({
  // State
  active: "Home",
  showNotifications: false,
  showSearch: false,
  showCreatePopup: false,
  showMorePopup: false,
  showMobileNotifications: false,
  showMobileSearch: false,
  lastActive: "Home",

  // Actions
  setActive: (tabName: TabName) => set({ active: tabName }),
  
  setLastActive: (tabName: TabName) => set({ lastActive: tabName }),
  
  openNotifications: () => {
    const currentActive = get().active;
    if (currentActive !== "Notifications") {
      set({ lastActive: currentActive });
    }
    set({
      active: "Notifications",
      showNotifications: true,
      showMobileNotifications: true,
      showSearch: false,
      showMobileSearch: false,
      showCreatePopup: false,
      showMorePopup: false
    });
  },
  
  closeNotifications: () => {
    const lastActive = get().lastActive;
    set({
      showNotifications: false,
      showMobileNotifications: false,
      active: lastActive
    });
  },
  
  openSearch: () => {
    const currentActive = get().active;
    if (currentActive !== "Search") {
      set({ lastActive: currentActive });
    }
    set({
      active: "Search",
      showSearch: true,
      showMobileSearch: true,
      showNotifications: false,
      showMobileNotifications: false,
      showCreatePopup: false,
      showMorePopup: false
    });
  },
  
  closeSearch: () => {
    const lastActive = get().lastActive;
    set({
      showSearch: false,
      showMobileSearch: false,
      active: lastActive
    });
  },
  
  toggleCreatePopup: () => {
    set((state) => ({
      showCreatePopup: !state.showCreatePopup,
      showMorePopup: false
    }));
  },
  
  toggleMorePopup: () => {
    set((state) => ({
      showMorePopup: !state.showMorePopup,
      showCreatePopup: false
    }));
  },
  
  closeAllPopups: () => set({
    showCreatePopup: false,
    showMorePopup: false
  }),
  
  // Reset all overlays/popups
  resetOverlays: () => set({
    showNotifications: false,
    showSearch: false,
    showCreatePopup: false,
    showMorePopup: false,
    showMobileNotifications: false,
    showMobileSearch: false
  })
}));

export default useNavigationStore;