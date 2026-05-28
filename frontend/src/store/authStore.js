import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  accountType: 'normal', // 'normal' or 'business'
  availableResources: 1000,
  usedResources: 0,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
  setAccountType: (type) => set({ 
    accountType: type,
    availableResources: type === 'business' ? 1550 : 1000
  }),
  addUsedResources: (count) => set((state) => ({
    usedResources: Math.min(state.usedResources + count, state.availableResources)
  })),
}))
