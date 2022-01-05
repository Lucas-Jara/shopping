import React, { useState } from 'react'

export const Cart = ({ data, cartState, setCartState, clearCart, removeFromCart, incrementQuantity, decrementQuantity }) => {

    console.log(data);

    const total = data.reduce((sum, product) => sum + parseInt(product.price * product.quantity), 0)
    const [menuCart, setMenuCart] = useState(false)

    return (
        <div className={`fixed h-screen top-0 ${cartState ? 'right-0' : '-right-full'} transition-all duration-500 ease-out w-screen bg-white dark:bg-stone-900 dark:text-white`}>
            <div className='h-16 flex items-center border-b'>
                <button
                    onClick={() => setCartState(false)}
                    className='text-4xl py-4 px-4'>
                    <i className="fas fa-angle-left"></i>
                </button>
                <span className='ml-2 text-2xl font-bold'>Cart</span>
            </div>

            {
                data.length > 0
                    ? <div className='relative p-4 flex items-center'>
                        <h2 className='font-bold text-xl mx-auto'>Total: {total}$</h2>
                        <button
                            onClick={() => setMenuCart(!menuCart)}
                            className='absolute right-4 px-4 py-1 text-md'>
                            <i className="fas fa-ellipsis-v"></i>
                        </button>
                    </div>
                    : <div className='p-4 text-center'>
                        <h2 className='font-medium text-xl'>No hay productos en el carrito</h2>
                    </div>
            }

            <div className={`${!menuCart && 'hidden'} absolute top-26 right-6 bg-gray-200 border dark:bg-stone-900 dark:text-white w-52 h-auto rounded-md`}>
                <li 
                onClick={() => {
                    clearCart()
                    setMenuCart(false)
                }}
                className='list-none w-full text-left px-4 py-2 capitalize font-normal border-gray-400 border-b'>Vaciar carrito</li>
                <li className='list-none w-full text-left px-4 py-2 capitalize font-normal '>Enviar orden</li>
            </div>



            <div className='h-4/5 overflow-y-auto'>
                <div className='flex flex-col justify-center items-center'>
                    {
                        data.map(({ id, name, price, image, quantity }) => (
                            <div key={id}
                                className='w-full flex justify-between items-stretch p-4 overflow-y-scroll border-b'>
                                <div className='w-full flex items-center'>
                                    <img className='w-28 aspect-square rounded' src={`./img/${image}.jpeg`} alt={name} />
                                    <div className='px-3'>
                                        <h2 className='font-medium text-lg leading-5'>{name}</h2>
                                        <p className='font-normal text-base py-3'>{price}$</p>
                                    </div>
                                </div>


                                <div className='w-10 flex flex-col justify-between'>
                                    <button 
                                    onClick={() => incrementQuantity(id)}
                                    className='rounded'>
                                        <i className="fas fa-angle-up"></i>
                                    </button>
                                    <div className="mb-1">
                                        <p className='font-medium text-lg text-center'>{quantity}</p>
                                    </div>

                                    {
                                        quantity > 0
                                            ? <button 
                                            onClick={() => decrementQuantity(id)}>
                                                <i className="fas fa-angle-down"></i>
                                            </button>
                                            : <button 
                                            onClick={() => removeFromCart(id)}>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                    }

                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
