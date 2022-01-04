import React from 'react'

export const NavBar = ({ setCartState, setAside }) => {
    return (
        <div className='fixed top-0 left-0 right-0 h-16 bg-white dark:bg-stone-900 dark:text-white flex justify-between items-center border-b'>
            <button
                onClick={() => setAside(true)}
                className='text-2xl py-4 px-4'>
                <i className="fas fa-bars"></i>
            </button>

            <h1 className='text-3xl font-medium uppercase'>Bebidas</h1>

            <button
                onClick={() => setCartState(true)}
                className='text-2xl py-4 px-4'>
                <i className="fas fa-shopping-cart"></i>
            </button>
        </div>
    )
}
