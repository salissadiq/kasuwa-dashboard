import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

interface SetupProps {
    children: React.ReactNode
}
export default async function SetupLayout({ children }: SetupProps) {
    const { userId } = auth()
    if (!userId) redirect('sign-in')

    const store = prismadb.store.findFirst({
        where: {
            userId
        }
    })

    if (store) redirect(`/${store.id}`)
    return (
        <>
            {children}
        </>
    )
}