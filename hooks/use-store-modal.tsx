import { create } from 'zustand'

interface useStoreModalStore {
    ispoen: boolean,
    onOpen: () => void,
    onClose: () => void
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
    ispoen: false,
    onOpen: () => set({ ispoen: true }),
    onClose: () => set({ ispoen: false })
}))