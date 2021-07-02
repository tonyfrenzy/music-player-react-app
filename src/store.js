import React, {useReducer, createContext} from 'react';

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducers from './reducers/rootReducers.js'

const middleware = [thunk, logger];
const initialState = {}
const store = createStore(rootReducers, initialState, applyMiddleware(...middleware))
const { Provider } = store;

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'Get_Albums': 
                return [...state, action.data]
            case 'Get_Songs': 
                return [...state, action.data]
            default: 
                return state
        }
    }, initialState)

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export {store, StateProvider};


export default store;