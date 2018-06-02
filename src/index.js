import {createStore} from 'redux'

function playlist (state = [], action){
    if (action.type === 'ADD') {
        return [
            ...state,
            action.payload
        ]
    }
    return state
}

const store = createStore(playlist)

console.log(store.getState())

store.subscribe(() => {
    console.log('subsucribe', store.getState())
})

store.dispatch({
    type: 'ADD',
    payload: 'Hey'
});

store.dispatch({
    type: 'ADD',
    payload: 'New'
});

store.dispatch({
    type: 'ADD',
    payload: 'New2'
});
