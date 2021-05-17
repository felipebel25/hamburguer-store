import React,{useState , useEffect} from 'react';
import initialState from '../initialState'
const API = "https://hambur.herokuapp.com/hamburguesas/"
const useInitialState = () => {
    
    const [state, setState]  = useState(initialState)
    const [products,setProducts] = useState([])
    
    useEffect(() => {
        fetch(API , {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])
        console.log(products);


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
        products,
        state
    }

}

export default useInitialState;