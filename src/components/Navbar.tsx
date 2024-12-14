import { ChevronDown } from 'lucide-react'
import React from 'react'

const profile = 'https://i.scdn.co/image/ab67616d0000b2737273c9c7da864966f4359f9a';

const Navbar = () => {
    return (
        <header className='fixed right-0 top-0 w-5/6 flex justify-between p-5'>
            <button className='flex items-center gap-1 text-lg text-neutral-400 font-medium'>
                ChatGPT
                <ChevronDown size={20} />
            </button>
            <img src={profile} alt="ChatGPT" className='w-8 h-8 aspect-square object-cover rounded-full' />
        </header>
    )
}

export default Navbar