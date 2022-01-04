import React, { useState } from 'react'

export const ProductItem = ({ data, addToCart }) => {

    const [agregar, setAgregar] = useState(false)


    const { id, name, image, price } = data
    return (
        <div className='bg-zinc-200 h-auto rounded-md py-2'>
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
                        onClick={() => {
                            addToCart(id)
                            setAgregar(true)
                        }}
                        className={` px-6 py-1 text-md bg-gray-800 text-white rounded`}>
                        {
                            agregar ? 'Agregado' : 'Agregar'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
