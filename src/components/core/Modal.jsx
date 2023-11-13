import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

export default function Modal({ children, onClick}) {

	return (
        <section className='fixed inset-0 z-10 w-full h-full flex items-center justify-center overflow-hidden bg-black/5 '>
            <div className='w-full max-w-screen-md p-8 rounded-lg shadow-sm bg-white mx-4'>
                <button className='flex justify-end w-full pb-8' onClick={onClick}>
                    <AiOutlineClose size={20}/>
                </button>
                <div className='flex flex-col gap-2 items-center'>
                    {children}
                </div>
            </div>
        </section>
    )
}
