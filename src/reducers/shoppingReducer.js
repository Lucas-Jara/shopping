import { types } from "../types/types";


export const shoppingReducer = (state, action) => {

    switch (action.type) {

        case types.ADD_TO_CART: {
            const newItem = state.products.find(product => product.id === action.payload)

            const itemCart = state.cart.find(product => product.id === action.payload)

            return itemCart
                ? {
                    ...state,
                    cart: [...state.cart]
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
                }

        }

        case types.CLEAR_CART:
            return {
                ...state,
                cart: []
            }

        case types.INCREMENT_QUANTITY: {
            const newCart = state.cart.map(product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product
            })

            return {
                ...state,
                cart: newCart
            }
        }

        case types.DECREMENT_QUANTITY: {
            const newCart = state.cart.map(product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product
            })

            return {
                ...state,
                cart: newCart
            }
        }

        case types.REMOVE_FROM_CART: {
            const newCart = state.cart.filter(product => product.id !== action.payload)

            return {
                ...state,
                cart: newCart
            }
        }


        default:
            return state;
    }

}