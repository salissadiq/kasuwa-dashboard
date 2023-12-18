import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode,
    params: { storeId: string }
}
export default async function DashboardLayout({ children, params }: LayoutProps) {
    const { userId } = auth()

    if (!userId) { redirect('/sign-in') }

    const store = prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })
    if (!store) { redirect('/') }

    return (
        <>
            <div>This will be a Navbar </div>
            {children}
        </>
    )
}
