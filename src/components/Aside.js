import React from 'react'

export const Aside = ({ aside, setAside }) => {
    return (
        <div className={`fixed h-screen top-0 ${aside ? 'right-0' : '-right-full'} transition-all duration-500 ease-out w-screen bg-white dark:bg-stone-900 dark:text-white`}>
            <div className='h-16 flex items-center border-b'>
                <button
                    onClick={() => setAside(false)}
                    className='text-4xl py-4 px-4'>
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
        </div>
    )
}
