import React,{useState} from 'react'
import initialState from '../initialState'

const useInitialState = () => {
    const [state, setState]  = useState(initialState)


    const addToCart = payload  =>{
        setState({
            ...state,
            cart: [ ...state.cart, payload]
        })
    }
    const removeCart = (payload , indexToRemove)  =>{
        setState({
            ...state,
            cart: state.cart.filter((items ,indexCurrent)=> 
            items.id  !== payload.id || indexCurrent !== indexToRemove)
        })
    };

    const addToBuyer = payload =>{
        setState({
            ...state,
            buyer : [...state.buyer, payload]
        })
    }
    const addNewOrder = payload =>{
        setState({
            ...state,
            orders : [...state.orders, payload]
        })
    }

    return{
        addToCart,
        removeCart,
        addToBuyer,
        addNewOrder,
        state
    }

}

export default useInitialState;