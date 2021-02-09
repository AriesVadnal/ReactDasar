const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value : 0,
    age : 17
}

// Reducer
const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_AGE' :
            return {
                ...state,
                age : state.age + 1
            }
        case 'ADD_VALUES' :
            return {
                ...state,
                value : state.value + action.newValue
            }
        default:
            return state;
    }
    
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subcription
store.subscribe(() => {
    console.log('store change ', store.getState());
})

// Dispatching Action
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'ADD_VALUES', newValue: 12});
console.log(store.getState());

