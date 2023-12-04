"use client"
import React from 'react'
import { useStoreModal } from '@/hooks/use-store-modal'
import Modal from '../ui/Modal'

export default function storeModal() {
    const modalStore = useStoreModal()
    return (
        <Modal
            title='Create Store'
            description='Add a new store to manage products and categories'
            isOpen={modalStore.ispoen}
            onClose={modalStore.onClose}
        >
            Future create store form
        </Modal>
    )
}
