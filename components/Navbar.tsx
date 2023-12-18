import { UserButton } from '@clerk/nextjs'
import React from 'react'
import MainNavs from './Main.navs'

export default function Navbar() {
    return (
        <div className='border-b'>
            <div className='flex h-16 items-center px-4'>
                <div>Store switch</div>
                <MainNavs />
                <div className='ml-auto flex space-x-4 items-center'>
                    <UserButton afterSignOutUrl='/' />
                </div>
            </div>
        </div>
    )
}
