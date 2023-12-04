"use client";
import Modal from '@/components/ui/Modal'
import { useStoreModal } from '@/hooks/use-store-modal';
import { useEffect } from 'react';
const SetupPage = () => {
    const isOpen = useStoreModal((state) => state.ispoen)
    const onOpen = useStoreModal((state) => state.onOpen)

    useEffect(() => {
        if (!isOpen) {
            onOpen()
        }
    }, [isOpen, onOpen])
    return (
        <div >
            Root page
        </div>
    )
}

export default SetupPage
