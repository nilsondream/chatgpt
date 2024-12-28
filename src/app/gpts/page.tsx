import React from 'react'
import { Magnifier } from '@gravity-ui/icons'

const GPTs = () => {
    return (
        <div className="bg-neutral-800/75 p-5 flex justify-center items-center">
            <div className="w-3/5 text-center space-y-7">
                <div>
                    <h1 className='text-5xl font-bold mb-3'>GPT</h1>
                    <p className='text-base text-neutral-400'>
                        Descubre y crea versiones personalizadas de ChatGPT que combinen instrucciones,
                        conocimientos adicionales y cualquier combinación de habilidades.
                    </p>
                </div>
                <form className='border border-neutral-700 rounded-xl p-5 flex items-center gap-3'>
                    <Magnifier />
                    <input
                        type="text"
                        placeholder='Buscar GPT'
                        className="bg-transparent w-full outline-none placeholder:text-neutral-400"
                    />
                </form>
            </div>
        </div>
    )
}

export default GPTs