import React from 'react'

export const Aside = ({ aside, setAside }) => {
    return (
        <div className={`fixed top-0 bottom-0 ${aside ? 'right-0' : '-right-full'} transition-all duration-500 ease-out w-screen bg-white`}>
            <div className='h-12 flex items-center border-b'>
                <button
                    onClick={() => setAside(false)}
                    className='text-3xl py-2 px-3'>
                    <i className="fas fa-angle-left"></i>
                </button>
                <span className='ml-2 text-2xl font-bold'>Menú</span>
            </div>

            <div>
                <ul className='flex flex-col justify-center'>
                    <li className='py-2 pl-2 text-lg font-medium border-b'>Editar producto</li>
                    <li className='py-2 pl-2 text-lg font-medium border-b'>Eliminar producto</li>
                    <li className='py-2 pl-2 text-lg font-medium border-b'>Agregar producto</li>
                </ul>
            </div>

            <div className='absolute flex items-center justify-center h-14 left-0 right-0 bottom-4'>
                <button className='font-semibold text-white text-lg bg-gray-800 px-4 py-2 rounded-md'>
                    modo oscuro
                </button>
            </div>
        </div>
    )
}
