import { create } from 'zustand'

export const usePostsStore = create((set) => ({
  posts: [],
  loading: false,

  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  updatePost: (id, updates) => set((state) => ({
    posts: state.posts.map((p) => (p.id === id ? { ...p, ...updates } : p))
  })),
  deletePost: (id) => set((state) => ({
    posts: state.posts.filter((p) => p.id !== id)
  })),
  setLoading: (loading) => set({ loading }),
}))
