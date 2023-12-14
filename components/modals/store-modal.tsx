"use client"
import React, { useState } from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

import { useStoreModal } from '@/hooks/use-store-modal'
import Modal from '@/components/ui/Modal'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'

import { Input } from '../ui/input'
import { Button } from '../ui/Button'
import toast from 'react-hot-toast'


const formSchema = z.object({
    name: z.string().min(1)
})

export default function storeModal() {
    const [loading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    })

    const onsubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
        try {
            setIsLoading(true)
            const response = await axios.post('/api/stores', values)
            toast.success("Store created")
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }

    }
    const modalStore = useStoreModal()
    return (
        <Modal
            title='Create Store'
            description='Add a new store to manage products and categories'
            isOpen={modalStore.ispoen}
            onClose={modalStore.onClose}
        >
            <div>
                <div className='space-y-4 py-2 pb-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onsubmit)}>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder='E-commerce' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <div className='pt-6 space-x-2 flex items-center justify-end'>
                                <Button disabled={loading} type='button' onClick={modalStore.onClose} variant={'outline'}>Cancel</Button>
                                <Button disabled={loading} type='submit'>Cantinue</Button>

                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}
