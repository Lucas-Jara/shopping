import React from 'react'

export const ProductItem = ({ data, addToCart }) => {


    const { id, name, image, price } = data
    return (
        <div className='bg-white dark:bg-stone-900 dark:text-white h-auto rounded-md py-2 border border-black dark:border-white'>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <img
                        className='w-32 aspect-square content-center object-cover rounded-md'
                        src={`./img/${image}`} alt={name} />
                </div>
                <h2 className='text-lg font-medium leading-8 capitalize text-center text-ellipsis'>{name}</h2>
                <p className='text-sm font-medium text'>{price}$</p>
                <div className='my-2'>
                    <button
                        onClick={() => addToCart(id)}
                        className={` px-6 py-1 text-md bg-stone-900 text-white  dark:bg-white dark:text-stone-900 rounded`}>
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}
