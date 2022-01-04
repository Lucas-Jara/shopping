import React, { useReducer, useState } from 'react'
import { Aside } from './components/Aside'
import { Cart } from './components/Cart'
import { NavBar } from './components/NavBar'
import { ProductItem } from './components/ProductItem'
import { shoppingReducer } from './reducers/shoppingReducer'
import { productos } from './utilities/products'


export const ShoppingApp = () => {


    const [cartState, setCartState] = useState(false)
    const [aside, setAside] = useState(false)

    const initialState = {
        products: productos,
        cart: []
    }

    const [state, dispatch] = useReducer(shoppingReducer, initialState)


    const { products, cart } = state

    const addToCart = (id) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: id
        })
    }

    const clearCart = () => {
        const queryClear = window.confirm('¿Estás seguro de vaciar el carrito?')

        if (queryClear) {
            dispatch({ type: 'CLEAR_CART' })
        }
    }

    const incrementQuantity = (id) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: id })
    }

    const decrementQuantity = (id) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: id })
    }

    const removeFromCart = (id) => {
        const queryDelete = window.confirm('¿Estás seguro de eliminar este producto?')

        if (queryDelete) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: id })
        }
    }


    return (
        <>
            <div>
                <NavBar
                    setCartState={setCartState}
                    setAside={setAside} />

                <Cart
                    data={cart}
                    cartState={cartState}
                    setCartState={setCartState}
                    clearCart={clearCart}
                    removeFromCart={removeFromCart}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity} />

                <Aside
                    aside={aside}
                    setAside={setAside} />

                <div className='px-4 mt-14 py-6 grid grid-cols-2 gap-4 bg-white dark:bg-stone-900'>
                    {
                        products.map(product => (
                            <ProductItem key={product.id} data={product} addToCart={addToCart} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
