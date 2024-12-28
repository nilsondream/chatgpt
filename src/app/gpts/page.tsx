import React from 'react'
import { Magnifier } from '@gravity-ui/icons'

const gpts = [
    {
        name: 'DALL·E',
        description: 'Let me turn your imagination into imagery.',
        autor: 'Por ChatGPT',
        image: 'https://cdn.prod.website-files.com/6471ebc32c5012b32f0e45ba/66bb6683ece4d782ab766a5a_tNK5LFgEeSyM9_mn598I6DF3IMVO_VkWBjtyeNt0UQw.png'
    },
    {
        name: 'Data Analyst',
        description: 'Drop in any files and I can help analyze and visualize your data.',
        autor: 'Por ChatGPT',
        image: 'https://jarvis.cx/tools/_next/image?url=https%3A%2F%2Ffiles.oaiusercontent.com%2Ffile-id374Jq85g2WfDgpuOdAMTEk%3Fse%3D2123-10-13T00%253A31%253A06Z%26sp%3Dr%26sv%3D2021-08-06%26sr%3Db%26rscc%3Dmax-age%253D31536000%252C%2520immutable%26rscd%3Dattachment%253B%2520filename%253Dagent_2.png%26sig%3DqFnFnFDVevdJL3xvtDE8vysDpTQmkSlF1zhYLAMiqmM%253D&w=128&q=75'
    },
    {
        name: 'Humanize AI',
        description: 'Top 1 AI humanizer to help you get human-like content.',
        autor: 'Por gptinf.com',
        image: 'https://cdn.prod.website-files.com/6471ebc32c5012b32f0e45ba/66bb5614cf6171fd313ef66a_LpJrnpP1yQI8aDT9vwU6Xr3bQjhwOvRBJWiLKtYX1xo.png'
    },
    {
        name: 'Video GPT by VEED',
        description: 'AI video maker powered by VideoGPT. Generate and edit videos with text prompts.',
        autor: 'Por veed.io',
        image: 'https://jarvis.cx/tools/_next/image?url=https%3A%2F%2Ffiles.oaiusercontent.com%2Ffile-4u5wkqX2w4i8SBpkAgthvVXC%3Fse%3D2124-04-07T20%253A55%253A23Z%26sp%3Dr%26sv%3D2021-08-06%26sr%3Db%26rscc%3Dmax-age%253D1209600%252C%2520immutable%26rscd%3Dattachment%253B%2520filename%253DGPT%252520Store%252520%2525282%252529.png%26sig%3Dv4ih98prPTbs%252BbJFWJjI2uIadNPos1me4fAuUtiWRTo%253D&w=1080&q=75'
    }
]

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
                <div>
                    <div className='text-start mb-5'>
                        <h2 className='text-xl'>Destacado</h2>
                        <p className='text-neutral-500'>Las mejores seleccionadas de esta semana</p>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        {gpts.map((item, index) => (
                            <div key={index} className='flex items-center gap-5 p-5 bg-neutral-700 hover:bg-neutral-600 rounded-xl'>
                                <img className='w-20 rounded-full' src={item.image} alt={item.name} />
                                <div className='text-start'>
                                    <h3 className='text-xl font-bold'>{item.name}</h3>
                                    <p className='line-clamp-2'>{item.description}</p>
                                    <span className='text-neutral-400'>{item.autor}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GPTs