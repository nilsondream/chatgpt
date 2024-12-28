import React from 'react'
import { ChevronDown } from '@gravity-ui/icons';

const profile = 'https://i.scdn.co/image/ab67616d0000b2737273c9c7da864966f4359f9a';

const Navbar = () => {
    return (
        <header className='fixed right-0 top-0 w-5/6 flex items-start justify-between p-5'>
            <button className='flex items-center gap-1 text-neutral-400'>
                ChatGPT
                <ChevronDown />
            </button>
            <img src={profile} alt="ChatGPT" className='w-8 h-8 aspect-square object-cover rounded-full' />
        </header>
    )
}

export default Navbar