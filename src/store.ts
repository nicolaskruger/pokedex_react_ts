import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { InithialState, pokedexReducer, PokedexReducerState } from './reducer';
import { LOCAL_STORAGE_KEYS, setLocalStorage } from './util';

const middleWare = [thunk];

const store = createStore(
    pokedexReducer,
    InithialState,
    applyMiddleware(
        ...middleWare
    )
)

store.subscribe(() => {
    setLocalStorage<PokedexReducerState>(store.getState(), LOCAL_STORAGE_KEYS.POKEDEX);
})

export { store }