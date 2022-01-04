import React from 'react'

export const NavBar = ({ setCartState, setAside }) => {
    return (
        <div className='fixed top-0 left-0 right-0 h-12 bg-white flex justify-between items-center border-b'>
            <button
                onClick={() => setAside(true)}
                className='text-xl py-2 px-3'>
                <i className="fas fa-bars"></i>
            </button>

            <h1 className='text-2xl font-medium uppercase'>Bebidas</h1>

            <button
                onClick={() => setCartState(true)}
                className='text-xl py-2 px-3'>
                <i className="fas fa-shopping-cart"></i>
            </button>
        </div>
    )
}
