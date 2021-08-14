import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { InithialState, pokedexReducer } from './reducer';


const middleWare = [thunk];


const store = createStore(
    pokedexReducer,
    InithialState,
    applyMiddleware(
        ...middleWare
    )
)

export { store }