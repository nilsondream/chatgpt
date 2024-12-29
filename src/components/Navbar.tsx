'use client'

import React, { useState } from 'react'
import { ArrowRightFromSquare, Book, ChevronDown, CloudNutHex, Gear, PersonPlus, Star } from '@gravity-ui/icons'

const profile = 'https://i.scdn.co/image/ab67616d0000b2737273c9c7da864966f4359f9a';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleDropdown = () => setOpen(!open);

    return (
        <>
            <header className='fixed right-0 top-0 w-5/6 flex items-start justify-between p-5'>
                <button className='flex items-center gap-1 text-neutral-400'>
                    ChatGPT
                    <ChevronDown />
                </button>
                <img
                    onClick={handleDropdown}
                    src={profile}
                    alt="ChatGPT"
                    className='w-8 h-8 aspect-square cursor-pointer object-cover rounded-full'
                />
            </header>

            <div className={`fixed flex-col gap-1 top-14 right-5 border bg-neutral-700/50 backdrop-blur-xl border-neutral-700 p-2 rounded-xl ${open ? 'flex visible' : 'hidden invisible'}`}>
                <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-600/50'>
                    <PersonPlus />
                    <p>Mis GPT</p>
                </div>
                <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-600/50'>
                    <Book />
                    <p>Personalizar ChatGPT</p>
                </div>
                <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-600/50'>
                    <Gear />
                    <p>Configuración</p>
                </div>
                <hr className='mx-3 opacity-15' />
                <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-600/50'>
                    <Star />
                    <p>Mejorar el plan</p>
                </div>
                <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-600/50'>
                    <CloudNutHex />
                    <p>Obtener la extensión de búsqueda de GPT</p>
                </div>
                <hr className='mx-3 opacity-15' />
                <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-600/50'>
                    <ArrowRightFromSquare />
                    <p>Cerrar sesión</p>
                </div>
            </div>
        </>
    )
}

export default Navbar